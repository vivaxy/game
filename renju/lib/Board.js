/**
 * @since 2018-03-11 10:20:12
 * @author vivaxy
 */

import events from './events.js';
import * as eventTypes from '../configs/eventTypes.js';
import * as layerTypes from '../configs/layerTypes.js';
import { mapIndexToCoords } from './utils.js';

export default class Board {
  constructor({ size, colCount, rowCount, gridSize } = {}) {
    this.size = size;
    this.colCount = colCount;
    this.rowCount = rowCount;
    this.gridSize = gridSize;
    events.on(eventTypes.GAME.RENDER, ({ layerType, ctx }) => {
      if (layerType === layerTypes.BOARD) {
        this.renderBorder({ ctx });
        this.renderGrid({ ctx });
      }
    });
  }

  getSize() {
    const { colCount, rowCount } = this;
    return { colCount, rowCount };
  }

  renderBorder({ ctx }) {
    const { width, height } = this.size;
    // ctx.lineWidth = 10;
    // ctx.strokeStyle = '#000000';
    // ctx.rect(-width / 2, height / 2, width, height);
    // ctx.stroke();
  }

  renderGrid({ ctx }) {
    const { size, gridSize } = this;
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';
    // draw cols
    Array.from({ length: this.colCount }, (col, index) => {
      ctx.beginPath();
      const { x: x1, y: y1 } = mapIndexToCoords({ colIndex: index, rowIndex: 0, gridSize, boardSize: size });
      ctx.moveTo(x1, y1);
      const { x: x2, y: y2 } = mapIndexToCoords({
        colIndex: index,
        rowIndex: this.rowCount - 1,
        gridSize,
        boardSize: size
      });
      ctx.lineTo(x2, y2);
      ctx.stroke();
    });
    // draw rows
    Array.from({ length: this.rowCount }, (row, index) => {
      ctx.beginPath();
      const { x: x1, y: y1 } = mapIndexToCoords({ colIndex: 0, rowIndex: index, gridSize, boardSize: size });
      ctx.moveTo(x1, y1);
      const { x: x2, y: y2 } = mapIndexToCoords({
        colIndex: this.colCount - 1,
        rowIndex: index,
        gridSize,
        boardSize: size
      });
      ctx.lineTo(x2, y2);
      ctx.stroke();
    });
  }

}
