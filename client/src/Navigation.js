import React, { useGlobal } from "reactn";
import { Button } from "./styles/styles";

const NavigationMenu = () => {
  const [, setActive] = useGlobal("active");
  return (
    <>
      <Button onClick={(e) => setActive(e.currentTarget.textContent)}>
        Spells
      </Button>
      <Button onClick={(e) => setActive(e.currentTarget.textContent)}>
        Classes
      </Button>
    </>
  );
};

export { NavigationMenu };
