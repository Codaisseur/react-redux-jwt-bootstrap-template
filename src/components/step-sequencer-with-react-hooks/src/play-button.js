import React from "react";
import styled from "styled-components";
import { darken } from "polished";

const Button = styled.button`
  padding: 0.75em 2em;
  outline: none;
  background-color: #27ae60;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1em;
  margin: 0.5em;

  &:hover {
    background: ${darken(0.2, "#27ae60")};
    cursor: pointer;
  }
`;

export default ({ playing, onClick }) => (
  <Button onClick={onClick}>{playing ? "Stop" : "Play"}</Button>
);
