import React from "react";
import styled from "styled-components";

const Dot = styled.button`
  background-color: transparent;
  cursor: pointer;
  position: relative;
  padding: 0;
  width: 3rem;
  height: 3rem;
  margin-right: 0.75rem;
  margin-left: 0.75rem;
  border: 0;
  display: flex;
  align-items: center;

  &::after {
    background-color: #efefef;
    width: 100%;
    height: 0.4rem;
    content: "";

    ${({ selected }) =>
      selected &&
      ` 
        background-color: #1bcacd;
        opacity: 1;
      `}
  }
`;

export const DotButton = ({ selected, onClick }) => (
  <Dot selected={selected} onClick={onClick} />
);

