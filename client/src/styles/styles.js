import styled from "styled-components";
import { GREEN, RED, NORMAL } from "../constants/constants";

export const Button = styled.button`
  border: 0px solid transparent;
  background-color: transparent;
  color: white;
  font-weight: bolder;
  cursor: pointer;
  &:hover {
    background-color: ${RED};
    color: ${GREEN};
  }
  &:focus {
    outline: none;
  }
  padding: ${NORMAL};
`;
