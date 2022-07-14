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

const Piece = ({ piece }) => {
  return (
    <S.Container>
      {piece.type === "king" && <King piece={piece} />}

      {piece.type === "queen" && <Queen piece={piece} />}

      {piece.type === "rook" && <Rook piece={piece} />}

      {piece.type === "bishop" && <Bishop piece={piece} />}

      {piece.type === "knight" && <Knight piece={piece} />}

      {piece.type === "pawn" && <Pawn piece={piece} />}

      {piece.type === "empty" && <Empty piece={piece} />}
    </S.Container>
  );
};

const King = ({ piece }) => {
  const dispacth = useDispatch();
  const { moves } = useSelector((state) => state.gameState);

  const { color, row, column, settings } = piece;

  return (
    <S.Svg
      src={color === "white" ? whiteKing : blackKing}
      draggable="false"
      background={
        moves.filter((move) => move.row === row && move.column === column)
          .length !== 0
      }
      onClick={() =>
        dispacth(
          move({
            type: "king",
            row,
            column,
            color,
            settings,
          })
        )
      }
    />
  );
};

const Queen = ({ piece }) => {
  const dispacth = useDispatch();
  const { moves } = useSelector((state) => state.gameState);

  const { color, row, column, settings } = piece;

  return (
    <S.Svg
      src={color === "white" ? whiteQueen : blackQueen}
      draggable="false"
      background={
        moves.filter((move) => move.row === row && move.column === column)
          .length !== 0
      }
      onClick={() =>
        dispacth(
          move({
            type: "queen",
            row,
            column,
            color,
            settings,
          })
        )
      }
    />
  );
};

const Rook = ({ piece }) => {
  const dispacth = useDispatch();
  const { moves } = useSelector((state) => state.gameState);

  const { color, row, column, settings } = piece;

  return (
    <S.Svg
      src={color === "white" ? whiteRook : blackRook}
      draggable="false"
      background={
        moves.filter((move) => move.row === row && move.column === column)
          .length !== 0
      }
      onClick={() =>
        dispacth(
          move({
            type: "rook",
            row,
            column,
            color,
            settings,
          })
        )
      }
    />
  );
};

const Bishop = ({ piece }) => {
  const dispacth = useDispatch();
  const { moves } = useSelector((state) => state.gameState);

  const { color, row, column, settings } = piece;

  return (
    <S.Svg
      src={color === "white" ? whiteBishop : blackBishop}
      draggable="false"
      background={
        moves.filter((move) => move.row === row && move.column === column)
          .length !== 0
      }
      onClick={() =>
        dispacth(
          move({
            type: "bishop",
            row,
            column,
            color,
            settings,
          })
        )
      }
    />
  );
};

const Knight = ({ piece }) => {
  const dispacth = useDispatch();
  const { moves } = useSelector((state) => state.gameState);

  const { color, row, column, settings } = piece;

  return (
    <S.Svg
      src={color === "white" ? whiteKnight : blackKnight}
      draggable="false"
      background={
        moves.filter((move) => move.row === row && move.column === column)
          .length !== 0
      }
      onClick={() =>
        dispacth(
          move({
            type: "knight",
            row,
            column,
            color,
            settings,
          })
        )
      }
    />
  );
};

const Pawn = ({ piece }) => {
  const dispacth = useDispatch();
  const { moves } = useSelector((state) => state.gameState);

  const { type, color, row, column, settings } = piece;

  return (
    <S.Svg
      src={color === "white" ? whitePawn : blackPawn}
      draggable="false"
      background={
        moves.filter((move) => move.row === row && move.column === column)
          .length !== 0
      }
      onClick={() =>
        dispacth(
          move({
            type,
            row,
            column,
            color,
            settings,
          })
        )
      }
    />
  );
};

const Empty = ({ piece }) => {
  const dispacth = useDispatch();
  const { moves } = useSelector((state) => state.gameState);

  const { color, row, column } = piece;

  return (
    <S.EmptyContainer onClick={() => dispacth(move({ row, column, color }))}>
      {moves.filter((move) => move.row === row && move.column === column)
        .length !== 0 && <S.EmptyDot />}
    </S.EmptyContainer>
  );
};

export default Piece;
