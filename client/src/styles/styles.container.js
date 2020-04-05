import styled from "styled-components";
import { BLUE, BROWN, RED, NORMAL } from "../constants/constants";

export const NavbarTop = styled.div`
  height: 3rem;
  position: relative;
  top: 0;
  display: flex;
  flex-direction: row;
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
