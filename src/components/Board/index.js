import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Cell, Piece } from "../../components";

import * as S from "./styles";

const Board = ({ height = "90rem", width = "90rem" }) => {
  const { board } = useSelector((state) => state.gameState);

  return (
    <S.Container height={height} width={width}>
      {board.map((row, indexRow) => (
        <S.Row height="12.5%">
          {row.map((column, indexCell) => (
            <Cell
              backgroundColor={
                (indexRow + indexCell + 1) % 2 === 0 ? "#333031" : "#ECDDE0"
              }
            >
              <Piece piece={column} row={indexRow} column={indexCell} />
            </Cell>
          ))}
        </S.Row>
      ))}
    </S.Container>
  );
};

export default Board;
