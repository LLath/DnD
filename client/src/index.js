import React, { useEffect, setGlobal, useGlobal } from "reactn";
import { render } from "react-dom";
import {
  Body,
  CookiePopup,
  NavbarTop,
  Footer,
} from "./styles/styles.container";
import { Button } from "./styles/styles";
import { Pages } from "./Pages";
import { NavigationMenu } from "./Navigation";

setGlobal({
  active: "Character",
  mode: localStorage.getItem("Mode"),
});

localStorage.setItem("Mode", "light");
let cookie = localStorage.getItem("Cookie");

const Switch = () => {
  const [mode, setMode] = useGlobal("mode");
  useEffect(() => {
    localStorage.setItem("Mode", mode);
  }, [mode]);
  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={() => {
          mode === "light" ? setMode("dark") : setMode("light");
          window.location.reload();
        }}
        checked={mode === "dark"}
      />
      <span className="slider round"></span>
    </label>
  );
};

render(
  <>
    <NavbarTop>
      <NavigationMenu />
      <Switch />
    </NavbarTop>
    <Body>
      <Pages />
    </Body>
    {cookie === null && (
      <CookiePopup>
        <p>This Website is using cookies.</p>
        <Button
          onClick={() => {
            localStorage.setItem("Cookie", true);
            window.location.reload();
          }}
        >
          Okay
        </Button>
      </CookiePopup>
    )}
    <Footer />
  </>,
  document.getElementById("root")
);
