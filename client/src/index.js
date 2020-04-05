import React, { setGlobal } from "reactn";
import { render } from "react-dom";
import { Body, NavbarTop, Footer } from "./styles/styles.container";
import { Pages } from "./Pages";
import { NavigationMenu } from "./Navigation";

setGlobal({
  active: "",
});

render(
  <>
    <NavbarTop>
      <NavigationMenu />
    </NavbarTop>
    <Body>
      <Pages />
    </Body>
    <Footer />
  </>,
  document.getElementById("root")
);
