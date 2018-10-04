/**
 * @since 2018-09-22 10:28:59
 * @author vivaxy
 */

import * as ET from '../enums/event-types.js';
import * as RS from '../enums/render-sequence.js';
import * as sizes from '../enums/sizes.js';
import GameContainer from '../class/game-container.js';

let gameContainer;

function init(ee) {
  gameContainer = new GameContainer(0, 0, sizes.GAME_CONTAINER_WIDTH, sizes.GAME_CONTAINER_HEIGHT, 'rgba(0,0,0,0.2)');

  ee.on(ET.TICK, function() {
    ee.emit(ET.APPLY_RENDER, { render, sequence: RS.BACKGROUND });
  });

  function render(ctx) {
    gameContainer.render(ctx);
  }
}

export default { init };
