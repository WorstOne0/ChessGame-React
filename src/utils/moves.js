const pawnMoves = (board, color, row, column, hasMoved) => {
  const moves = [];

  console.log(row, column);

  if (color === "white") {
    // Move up one square if its not blocked
    if (board[row - 1][column].color === null)
      moves.push({ row: row - 1, column: column });

    // If it is the first move, move up two squares if its not blocked
    if (!hasMoved) {
      if (
        board[row - 1][column].color === null &&
        board[row - 2][column].color === null
      )
        moves.push({ row: row - 2, column: column });
    }

    // Capture diagonally left
    if (
      column - 1 >= 0 &&
      column - 1 < 8 &&
      board[row - 1][column - 1].color === "black"
    )
      moves.push({ row: row - 1, column: column - 1 });

    // Capture diagonally right
    if (
      column + 1 >= 0 &&
      column + 1 < 8 &&
      board[row - 1][column + 1].color === "black"
    )
      moves.push({ row: row - 1, column: column + 1 });
  } else {
    // Move down one square if its not blocked
    if (board[row + 1][column].color === null)
      moves.push({ row: row + 1, column: column });

    // If it is the first move, move down two squares if its not blocked
    if (!hasMoved) {
      if (
        board[row + 1][column].color === null &&
        board[row + 2][column].color === null
      )
        moves.push({ row: row + 2, column: column });
    }

    // Capture diagonally left
    if (
      column - 1 >= 0 &&
      column - 1 < 8 &&
      board[row + 1][column - 1].color === "white"
    )
      moves.push({ row: row + 1, column: column - 1 });

    // Capture diagonally right
    if (
      column + 1 >= 0 &&
      column + 1 < 8 &&
      board[row + 1][column + 1].color === "white"
    )
      moves.push({ row: row + 1, column: column + 1 });
  }

  return moves;
};

const knightMoves = (board, color, row, column) => {
  const moves = [];

  const rowMoves = [2, 1, -1, -2, -2, -1, 1, 2];
  const columnMoves = [1, 2, 2, 1, -1, -2, -2, -1];

  for (let i = 0; i < 8; i++) {
    const newRow = row + rowMoves[i];
    const newColumn = column + columnMoves[i];

    if (
      newRow >= 0 &&
      newRow < 8 &&
      newColumn >= 0 &&
      newColumn < 8 &&
      board[newRow][newColumn].color !== color
    ) {
      moves.push({ row: newRow, column: newColumn });
    }
  }

  return moves;
};

const bishopMoves = (board, color, opponentColor, row, column) => {
  const moves = [];

  const rowMoves = [-1, -1, 1, 1];
  const columnMoves = [-1, 1, -1, 1];

  for (let i = 0; i < rowMoves.length; i++) {
    let newRow = row + rowMoves[i];
    let newColumn = column + columnMoves[i];

    while (
      newRow >= 0 &&
      newRow < 8 &&
      newColumn >= 0 &&
      newColumn < 8 &&
      board[newRow][newColumn].color !== color
    ) {
      moves.push({ row: newRow, column: newColumn });

      if (board[newRow][newColumn].color === opponentColor) break;

      newRow += rowMoves[i];
      newColumn += columnMoves[i];
    }
  }

  return moves;
};

const rookMoves = (board, color, opponentColor, row, column) => {
  const moves = [];

  const rowMoves = [-1, 0, 1, 0];
  const columnMoves = [0, 1, 0, -1];

  for (let i = 0; i < rowMoves.length; i++) {
    let newRow = row + rowMoves[i];
    let newColumn = column + columnMoves[i];

    while (
      newRow >= 0 &&
      newRow < 8 &&
      newColumn >= 0 &&
      newColumn < 8 &&
      board[newRow][newColumn].color !== color
    ) {
      moves.push({ row: newRow, column: newColumn });

      if (board[newRow][newColumn].color === opponentColor) break;

      newRow += rowMoves[i];
      newColumn += columnMoves[i];
    }
  }

  return moves;
};

const queenMoves = (board, color, opponentColor, row, column) => {
  let moves = [];

  moves = [...moves, ...bishopMoves(board, color, opponentColor, row, column)];
  moves = [...moves, ...rookMoves(board, color, opponentColor, row, column)];

  return moves;
};

const legalMoves = (
  type,
  board,
  color,
  opponentColor,
  row,
  column,
  settings
) => {
  if (type === "pawn")
    return pawnMoves(board, color, row, column, settings.hasMoved);

  if (type === "knight") return knightMoves(board, color, row, column);

  if (type === "bishop")
    return bishopMoves(board, color, opponentColor, row, column);

  if (type === "rook")
    return rookMoves(board, color, opponentColor, row, column);

  if (type === "queen")
    return queenMoves(board, color, opponentColor, row, column);

  return [];
};

export { legalMoves };
