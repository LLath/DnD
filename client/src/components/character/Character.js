import React, { useState } from "react";
import { character } from "../../constants/constants.character";

const Character = () => {
  const [data, setData] = useState({});
  let char = { ...character };
  console.log(data, character(data));
  return (
    <>
      <p>Name:</p>
      <input
        onChange={(e) => setData({ ...data, name: e.currentTarget.value })}
      />
      <p>Class:</p>
      <input
        onChange={(e) => setData({ ...data, class: e.currentTarget.value })}
      />
      <p>Race:</p>
      <input
        onChange={(e) => setData({ ...data, race: e.currentTarget.value })}
      />
      <button onClick={() => (char = {})}>Create Character</button>
    </>
  );
};

export { Character };
