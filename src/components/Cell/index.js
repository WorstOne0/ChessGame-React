import React, { useState } from "react";

import * as S from "./styles";

const Cell = ({ children, backgroundColor }) => {
  return (
    <S.Container width="12.5%" background={backgroundColor}>
      {children}
    </S.Container>
  );
};

export default Cell;
