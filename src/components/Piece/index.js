import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { move } from "../../store/board";

import * as S from "./styles";

import whiteKing from "../../assets/white_king.svg";
import blackKing from "../../assets/black_king.svg";
import whiteQueen from "../../assets/white_queen.svg";
import blackQueen from "../../assets/black_queen.svg";
import whiteRook from "../../assets/white_rook.svg";
import blackRook from "../../assets/black_rook.svg";
import whiteBishop from "../../assets/white_bishop.svg";
import blackBishop from "../../assets/black_bishop.svg";
import whiteKnight from "../../assets/white_knight.svg";
import blackKnight from "../../assets/black_knight.svg";
import whitePawn from "../../assets/white_pawn.svg";
import blackPawn from "../../assets/black_pawn.svg";

const Piece = ({ piece, row, column }) => {
  return (
    <S.Container>
      {piece === "K" && <King color="white" row={row} column={column} />}
      {piece === "k" && <King color="black" row={row} column={column} />}

      {piece === "Q" && <Queen color="white" row={row} column={column} />}
      {piece === "q" && <Queen color="black" row={row} column={column} />}

      {piece === "R" && <Rook color="white" row={row} column={column} />}
      {piece === "r" && <Rook color="black" row={row} column={column} />}

      {piece === "B" && <Bishop color="white" row={row} column={column} />}
      {piece === "b" && <Bishop color="black" row={row} column={column} />}

      {piece === "N" && <Knight color="white" row={row} column={column} />}
      {piece === "n" && <Knight color="black" row={row} column={column} />}

      {piece === "P" && <Pawn color="white" row={row} column={column} />}
      {piece === "p" && <Pawn color="black" row={row} column={column} />}

      {piece === null && <Empty color={null} row={row} column={column} />}
    </S.Container>
  );
};

const King = ({ color, row, column }) => {
  const dispacth = useDispatch();

  return (
    <S.Svg
      src={color === "white" ? whiteKing : blackKing}
      draggable="false"
      onClick={() => dispacth(move({ row, column, color }))}
    />
  );
};

const Queen = ({ color, row, column }) => {
  const dispacth = useDispatch();

  return (
    <S.Svg
      src={color === "white" ? whiteQueen : blackQueen}
      draggable="false"
      onClick={() => dispacth(move({ row, column, color }))}
    />
  );
};

const Rook = ({ color, row, column }) => {
  const dispacth = useDispatch();

  return (
    <S.Svg
      src={color === "white" ? whiteRook : blackRook}
      draggable="false"
      onClick={() => dispacth(move({ row, column, color }))}
    />
  );
};

const Bishop = ({ color, row, column }) => {
  const dispacth = useDispatch();

  return (
    <S.Svg
      src={color === "white" ? whiteBishop : blackBishop}
      draggable="false"
      onClick={() => dispacth(move({ row, column, color }))}
    />
  );
};

const Knight = ({ color, row, column }) => {
  const dispacth = useDispatch();

  return (
    <S.Svg
      src={color === "white" ? whiteKnight : blackKnight}
      draggable="false"
      onClick={() => dispacth(move({ row, column, color }))}
    />
  );
};

const Pawn = ({ color, row, column }) => {
  const dispacth = useDispatch();
  const [hasMoved, setHasMoved] = useState(false);

  const possibleMoves = () => {};

  return (
    <S.Svg
      src={color === "white" ? whitePawn : blackPawn}
      draggable="false"
      onClick={() => dispacth(move({ row, column, color }))}
    />
  );
};

const Empty = ({ color, row, column }) => {
  const dispacth = useDispatch();
  return (
    <S.EmptyContainer onClick={() => dispacth(move({ row, column, color }))} />
  );
};

export default Piece;
