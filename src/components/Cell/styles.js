import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: ${(props) => props.width};
  background: ${(props) => props.background};

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-primary);

  ${(props) => props.isSelected && `box-shadow:inset 0 0 0 0.3rem #fff;`}
`;
