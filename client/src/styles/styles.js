import styled from "styled-components";
import { GREEN, RED, NORMAL, BLUE, TEXT_COLOR } from "../constants/constants";

export const Button = styled.button`
  border: 0px solid transparent;
  background-color: transparent;
  color: ${TEXT_COLOR};
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

export const Input = styled.input`
  border: 1px solid transparent;
  &:hover {
    backgounrd-color: lightgrey;
    border: 1px solid ${BLUE};
    box-shadow: 1px 1px 1px ${GREEN};
  }
  &:focus {
    border: 1px solid ${BLUE};
    outline: none;
  }
  margin-bottom: 1rem;
  padding: 0.3rem;
  font-weight: bolder;
`;
