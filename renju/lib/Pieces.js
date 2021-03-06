/**
 * @since 2018-03-11 15:42:25
 * @author vivaxy
 */

import events from './events.js';
import * as eventTypes from '../configs/eventTypes.js';
import * as pieceTypes from '../configs/pieceTypes.js';
import * as layerTypes from '../configs/layerTypes.js';
import { mapIndexToCoords } from './utils.js';

const offset = 12;
const length = 6;
const lineWidth = 2;

export default class Pieces {
  constructor({ gridSize, boardSize, initialType, colCount, rowCount, pieces } = {}) {
    this.boardSize = boardSize;
    this.gridSize = gridSize;
    this.colCount = colCount;
    this.rowCount = rowCount;
    const size = Math.min(this.gridSize.width, this.gridSize.height) / 2 - 4;
    this.size = { width: size, height: size };
    this.initialType = initialType;
    this.type = initialType;
    /**
     *
     *  @param colIndex
     *  @param rowIndex
     *  @param type
     */
    this.pieces = pieces;
    this.board = Array.from({ length: rowCount }, () => {
      return Array.from({ length: colCount }, () => {
        return {};
      });
    });
    events.on(eventTypes.GAME.RENDER, ({ layerType, ctx }) => {
      if (layerType === layerTypes.PIECES) {
        this.render({ ctx });
      }
    });

  }

  pieceExists({ colIndex, rowIndex }) {
    return this.pieces.some(({ colIndex: _colIndex, rowIndex: _rowIndex }) => {
      return _colIndex === colIndex && _rowIndex === rowIndex;
    });
  }

  getPieces() {
    return this.pieces;
  }

  getPieceType() {
    return this.type;
  }

  checkWin() {
    const { colIndex, rowIndex, type } = this.pieces[this.pieces.length - 1];
    const directions = [
      ({ rowIndex, colIndex, diff }) => {
        return { rowIndex, colIndex: colIndex + diff };
      },
      ({ rowIndex, colIndex, diff }) => {
        return { rowIndex: rowIndex + diff, colIndex };
      },
      ({ rowIndex, colIndex, diff }) => {
        return { rowIndex: rowIndex + diff, colIndex: colIndex + diff };
      },
      ({ rowIndex, colIndex, diff }) => {
        return { rowIndex: rowIndex - diff, colIndex: colIndex + diff };
      },
    ];
    for (let i = 0; i < 4; i++) {
      let line = '';
      for (let diff = -4; diff < 5; diff++) {
        const { colIndex: _colIndex, rowIndex: _rowIndex } = directions[i]({ rowIndex, colIndex, diff });
        if (_rowIndex >= 0 && _rowIndex < this.board.length - 1) {
          const thisRow = this.board[_rowIndex];
          if (_colIndex >= 0 && _colIndex < thisRow.length - 1) {
            const { type: _type } = thisRow[_colIndex];
            if (_type === type) {
              line += '.';
            } else {
              line += ' ';
            }
          }
        }
      }
      if (line.includes('.....')) {
        return true;
      }
    }
    return false;
  }

  addPiece(piece) {
    this.pieces.push(piece);
    this.board[piece.rowIndex][piece.colIndex] = piece;
  }

  undo() {
    if (!this.pieces.length) {
      return false;
    }
    const { colIndex, rowIndex } = this.pieces.pop();
    this.board[rowIndex][colIndex] = {};
    this.switchPieceType();
    return true;
  }

  canUndo() {
    return this.pieces.length !== 0;
  }

  reset() {
    while (this.pieces.length) {
      this.pieces.pop();
    }
    this.board.map((row, rowIndex) => {
      return row.map((item, colIndex) => {
        this.board[rowIndex][colIndex] = {};
      });
    });
    this.type = this.initialType;
  }

  switchPieceType() {
    if (this.type === pieceTypes.WHITE) {
      this.type = pieceTypes.BLACK;
    } else {
      this.type = pieceTypes.WHITE;
    }
  }

  render({ ctx }) {
    const { width: radius } = this.size;
    this.pieces.map(({ colIndex, rowIndex, type }, index) => {
      if (type === pieceTypes.BLACK) {
        ctx.fillStyle = '#000000';
      } else {
        ctx.fillStyle = '#ffffff';
      }
      const { x, y } = mapIndexToCoords({
        colIndex,
        rowIndex,
        gridSize: this.gridSize,
        boardSize: this.boardSize
      });
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fill();
      // border
      if (type === pieceTypes.BLACK) {
        ctx.strokeStyle = '#ffffff';
      } else {
        ctx.strokeStyle = '#000000';
      }
      ctx.lineWidth = lineWidth;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.stroke();
      if (index === this.pieces.length - 1) {
        // last piece, add cursor
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = '#000000';
        [
          [
            [x + offset, y + offset + length],
            [x + offset + length, y + offset + length],
            [x + offset + length, y + offset],
          ],
          [
            [x + offset + length, y - offset],
            [x + offset + length, y - offset - length],
            [x + offset, y - offset - length],
          ],
          [
            [x - offset, y - offset - length],
            [x - offset - length, y - offset - length],
            [x - offset - length, y - offset],
          ],
          [
            [x - offset - length, y + offset],
            [x - offset - length, y + offset + length],
            [x - offset, y + offset + length],
          ],
        ].map(([moveTo, lineTo1, lineTo2]) => {
          ctx.beginPath();
          ctx.moveTo(...moveTo);
          ctx.lineTo(...lineTo1);
          ctx.lineTo(...lineTo2);
          ctx.stroke();
        });
      }
    });
  }
}
