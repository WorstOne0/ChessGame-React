import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Svg = styled.img`
  height: 100%;
  width: 100%;
  background: ${(props) => props.background && "red"};
`;

export const EmptyContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmptyDot = styled.div`
  height: 20%;
  width: 20%;
  border-radius: 50%;
  background: #4d4d4d;

  opacity: 0.5;
`;
