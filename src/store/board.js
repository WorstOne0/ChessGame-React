import { createSlice } from "@reduxjs/toolkit";

import { buildBoard } from "../utils/pieces";
import { legalMoves } from "../utils/moves";

const initialState = {
  board: buildBoard(),

  // board: [
  //   ["r", "n", "b", "q", "k", "b", "n", "r"],
  //   ["p", "p", "p", "p", "p", "p", "p", "p"],
  //   [null, null, null, null, null, null, null, null],
  //   [null, null, null, null, null, null, null, null],
  //   [null, null, null, null, null, null, null, null],
  //   [null, null, null, null, null, null, null, null],
  //   ["P", "P", "P", "P", "P", "P", "P", "P"],
  //   ["R", "N", "B", "Q", "K", "B", "N", "R"],
  // ],

  player: { color: "white", helper: 1 },
  opponent: { color: "black", helper: -1 },

  // Selected piece
  from: {
    row: null,
    column: null,
  },
  // Sqaure to move to
  to: {
    row: null,
    column: null,
  },
  isFromSet: false,
  isMovable: false,

  // Legal moves from selected piece
  moves: [],
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    move: (state, action) => {
      const { type, row, column, color, settings } = action.payload;

      if (color === state.player.color) {
        state.from = { row, column };
        state.isFromSet = true;

        state.moves = legalMoves(
          type,
          state.board,
          color,
          state.opponent.color,
          row,
          column,
          settings
        );
      }

      if (color === null || color === state.opponent.color) {
        if (
          state.moves.filter(
            (move) => move.row === row && move.column === column
          ).length !== 0
        ) {
          state.to = { row, column };

          state.isMovable = state.isFromSet;
        } else {
          state.from = { row: null, column: null };
          state.isFromSet = false;
          state.moves = [];
        }
      }

      if (state.isMovable) {
        state.board[state.to.row][state.to.column] =
          state.board[state.from.row][state.from.column];
        state.board[state.from.row][state.from.column] = {
          type: "empty",
          row: state.from.row,
          column: state.from.column,
          color: null,

          settings: {},
        };

        state.board[state.to.row][state.to.column].row = state.to.row;
        state.board[state.to.row][state.to.column].column = state.to.column;

        if (state.board[state.to.row][state.to.column].type === "pawn")
          state.board[state.to.row][state.to.column].settings.hasMoved = true;

        state.player = {
          color: state.player.color === "white" ? "black" : "white",
          helper: state.player.helper * -1,
        };
        state.opponent = {
          color: state.opponent.color === "white" ? "black" : "white",
          helper: state.opponent.helper * -1,
        };

        state.movedPiece = {
          row: state.from.row,
          column: state.from.column,
          action: "moved",
        };

        state.from = { row: null, column: null, color: null };
        state.to = { row: null, column: null, color: null };

        state.isFromSet = false;
        state.isMovable = false;
        state.moves = [];
      }
    },
  },
});

export const { move } = boardSlice.actions;

export default boardSlice.reducer;
