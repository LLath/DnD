import React, { useGlobal } from "reactn";
import { Classes, Spells } from "./components/index.components.js";

const Pages = () => {
  let [active] = useGlobal("active");

  switch (active) {
    case "Spells":
      return <Spells />;
    case "Classes":
      return <Classes />;
    default:
      return <div></div>;
  }
};
export { Pages };
