import React, { useGlobal } from "reactn";
import { Character, Classes, Spells } from "./components/index.components.js";

const Pages = () => {
  let [active] = useGlobal("active");

  switch (active) {
    case "Spells":
      return <Spells />;
    case "Classes":
      return <Classes />;
    case "Character":
      return <Character />;
    default:
      return <div></div>;
  }
};
export { Pages };
