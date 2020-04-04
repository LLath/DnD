import React, { useEffect, useState } from "react";
import { get } from "../../helpers/index.helpers";
import { Class } from "./Class";

const Classes = () => {
  const [classes, setClasses] = useState("");
  const [clicked, setClicked] = useState("");
  const [clickedClass, setClickedClass] = useState([]);

  useEffect(() => {
    get(
      `${process.env.REACT_APP_LOCAL_PROXY}http://dnd5eapi.co/api/classes`,
      setClasses,
      "results"
    );
  }, []);

  useEffect(() => {
    clicked !== "" &&
      get(
        `${process.env.REACT_APP_LOCAL_PROXY}http://dnd5eapi.co${clicked.url}`,
        setClickedClass
      );
  }, [clicked]);

  return (
    <>
      {classes !== "" &&
        classes.map((_class) => (
          <div
            style={{ cursor: "pointer" }}
            key={_class.url}
            onClick={() => setClicked(_class)}
          >
            {_class.name}
          </div>
        ))}
      <div style={{ marginTop: "5rem" }}>{Class(clickedClass)}</div>
    </>
  );
};

export { Classes };
