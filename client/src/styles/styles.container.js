import styled from "styled-components";
import { BLUE, BROWN, RED, NORMAL } from "../constants/constants";

export const NavbarTop = styled.div`
  height: 3rem;
  position: relative;
  top: 0;
  display: flex;
  flex-direction: row;
  padding-left: 1rem;
  background-color: ${BLUE};
`;

export const Footer = styled.div`
  position: relative;
  height: 5rem;
  bottom: 0;
  display: flex;
  flex-direction: row;
  background-color: ${BROWN};
`;

export const Body = styled.div`
  overflow-y: auto;
  height: calc(100% - 6rem);
  background-color: ${RED};
  font-size: ${NORMAL};
  padding: ${NORMAL};
`;

export const CookiePopup = styled.div`
  height: 3rem;
  background-color: rgba(20, 20, 20, 0.8);
  position: fixed;
  bottom: 0.2rem;
  left: 0;
  right: 0;
  z-index: 9999;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: ${(props) => (props.content ? props.content : "")};
`;

export const TextContainer = styled.div`
  padding: 1rem;
  padding-top: 0.3rem;
  position: ${(props) => (props.position ? props.position : "relative")};
  right: 0;
  top: 0;
  bottom: 0;
  text-align: justify;
  hyphens: auto;
`;
