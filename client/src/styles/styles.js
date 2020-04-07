import styled from "styled-components";
import {
  GREEN,
  RED,
  NORMAL,
  BLUE,
  TEXT_COLOR,
  SMALL,
  BIG,
} from "../constants/constants";

const size = (_size) => {
  switch (_size) {
    case "normal":
      return NORMAL;
    case "small":
      return SMALL;
    case "big":
      return BIG;

    default:
      break;
  }
};

export const Button = styled.button`
  border: 0px solid transparent;
  background-color: transparent;
  color: ${(props) => (props.checked ? "black" : TEXT_COLOR)};
  font-weight: bolder;
  cursor: pointer;
  &:hover {
    background-color: ${RED};
    color: black;
  }
  &:focus {
    outline: none;
  }
  padding: ${(props) => size(props.size)};
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

export const Clickable = styled.div`
  padding: 0.3rem;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.color ? props.color : BLUE)};
    color: ${TEXT_COLOR};
  }
`;
