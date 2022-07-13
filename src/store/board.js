import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: [
    ["r", "n", "b", "q", "k", "b", "n", "r"],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ],

  player: "white",
  opponent: "black",

  from: {
    row: null,
    column: null,
    color: null,
  },
  to: {
    row: null,
    column: null,
    color: null,
  },
  isFromSet: false,
  isMovable: false,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    move: (state, action) => {
      const { row, column, color } = action.payload;

      if (color === state.player) {
        state.from = { row, column, color };
        state.isFromSet = true;
      }

      if (color === null || color === state.opponent) {
        state.to = { row, column, color };

        state.isMovable = state.isFromSet;
      }

      if (state.isMovable) {
        state.board[state.to.row][state.to.column] =
          state.board[state.from.row][state.from.column];
        state.board[state.from.row][state.from.column] = null;

        state.player = state.player === "white" ? "black" : "white";
        state.opponent = state.player === "white" ? "black" : "white";

        state.from = { row: null, column: null, color: null };
        state.to = { row: null, column: null, color: null };

        state.isFromSet = false;
        state.isMovable = false;
      }
    },
  },
});

export const { move } = boardSlice.actions;

export default boardSlice.reducer;
