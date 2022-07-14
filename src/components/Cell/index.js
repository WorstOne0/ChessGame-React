import React from "react";
import { useSelector } from "react-redux";

import { Piece } from "../../components";

import * as S from "./styles";

const Cell = ({ piece, row, column, backgroundColor }) => {
  const { from } = useSelector((state) => state.gameState);

  return (
    <S.Container
      width="12.5%"
      background={backgroundColor}
      isSelected={from.row === row && from.column === column}
    >
      <Piece piece={piece} />
    </S.Container>
  );
};

export default Cell;
