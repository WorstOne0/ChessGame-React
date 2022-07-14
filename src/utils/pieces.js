const buildBoard = () => {
  const board = [
      ["r", "n", "b", "q", "k", "b", "n", "r"],
      ["p", "p", "p", "p", "p", "p", "p", "p"],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ["P", "P", "P", "P", "P", "P", "P", "P"],
      ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ],
    newBoard = [[], [], [], [], [], [], [], []];

  board.map((row, rowIndex) => {
    row.map((piece, columnIndex) => {
      if (piece === "p" || piece === "P") {
        newBoard[rowIndex].push({
          type: "pawn",
          row: rowIndex,
          column: columnIndex,
          color: piece === "P" ? "white" : "black",

          settings: { hasMoved: false },
        });
      }

      if (piece === "n" || piece === "N") {
        newBoard[rowIndex].push({
          type: "knight",
          row: rowIndex,
          column: columnIndex,
          color: piece === "N" ? "white" : "black",

          settings: {},
        });
      }

      if (piece === "b" || piece === "B") {
        newBoard[rowIndex].push({
          type: "bishop",
          row: rowIndex,
          column: columnIndex,
          color: piece === "B" ? "white" : "black",

          settings: {},
        });
      }

      if (piece === "r" || piece === "R") {
        newBoard[rowIndex].push({
          type: "rook",
          row: rowIndex,
          column: columnIndex,
          color: piece === "R" ? "white" : "black",

          settings: {},
        });
      }

      if (piece === "q" || piece === "Q") {
        newBoard[rowIndex].push({
          type: "queen",
          row: rowIndex,
          column: columnIndex,
          color: piece === "Q" ? "white" : "black",

          settings: {},
        });
      }

      if (piece === "k" || piece === "K") {
        newBoard[rowIndex].push({
          type: "king",
          row: rowIndex,
          column: columnIndex,
          color: piece === "K" ? "white" : "black",

          settings: {},
        });
      }

      if (piece === null) {
        newBoard[rowIndex].push({
          type: "empty",
          row: rowIndex,
          column: columnIndex,
          color: null,

          settings: {},
        });
      }
    });
  });

  return newBoard;
};

export { buildBoard };
