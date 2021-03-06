/**
 * @since 2017-03-17 13:57:46
 * @author vivaxy
 */

import { browserEvents, events, puzzleStatusCodes } from './index/configs.js';
import Canvas from './index/canvas.js';
import Puzzle from './index/puzzle.js';
import Input from './index/input.js';

class Game {
  constructor({ row = 4, col = 4 } = {}) {
    const canvas = new Canvas();
    const input = new Input({ canvas: canvas.getCanvas() });
    const puzzle = new Puzzle({ ctx: canvas.getCtx(), row, col, input });
    this.canvas = canvas;
    this.puzzle = puzzle;
    // disable scroll. // weixin need this
    document.body.addEventListener(browserEvents.TOUCH_MOVE, (e) => {
      e.preventDefault();
    }, { passive: false });
    input.on(events.RESIZE_CANVAS, () => {
      canvas.updatePosition();
    });
  }

  render() {
    const { puzzle, canvas } = this;
    canvas.clear();
    puzzle.render();
  }

  update() {
    const { puzzle } = this;
    puzzle.update();
  }

  loop() {
    this.update();
    this.render();
    requestAnimationFrame(() => {
      this.loop();
    });
  }

  start() {
    this.loop();
    this.puzzle.scramble();
    this.puzzle.puzzleStatus = puzzleStatusCodes.READY;
  }
}

new Game().start();
