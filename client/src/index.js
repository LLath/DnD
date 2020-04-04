import React, { useState } from "react";
import { render } from "react-dom";
import { Classes, Spells } from "./components/index.components.js";

const Home = () => {
  const [state, setState] = useState();
  let page = "";
  switch (state) {
    case "Spells":
      page = <Spells />;
      break;
    case "Classes":
      page = <Classes />;
      break;
    default:
      break;
  }
  return <>{page ? page : renderButton(setState)}</>;
};

const renderButton = (_function) => (
  <>
    <button onClick={(e) => _function(e.currentTarget.textContent)}>
      Spells
    </button>
    <button onClick={(e) => _function(e.currentTarget.textContent)}>
      Classes
    </button>
  </>
);

render(
  <>
    <Home />
  </>,
  document.getElementById("root")
);
