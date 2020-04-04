import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { sortedSearch, get } from "../../helpers/index.helpers";

const Spells = () => {
  const [spells, setSpells] = useState(
    JSON.parse(localStorage.getItem("Spells"))
  );
  const [searchedSpell, setSearchedSpell] = useState("");
  const [showSpell, setShowSpell] = useState("");
  const [germanSpell, setGermanSpell] = useState("");
  const [search, setSearch] = useState("");
  const [copySpells] = useState([...spells]);

  useEffect(() => {
    get(
      `${process.env.REACT_APP_LOCAL_PROXY}http://dnd5eapi.co/api/spells/`,
      setSpells,
      "results"
    );
  }, []);

  useEffect(() => {
    searchedSpell !== "" &&
      get(
        `${process.env.REACT_APP_LOCAL_PROXY}http://dnd5eapi.co${searchedSpell.url}`,
        setShowSpell
      );
  }, [searchedSpell]);

  const _name =
    searchedSpell.name === "Arcane Hand" ? "Bigby's Hand" : searchedSpell.name;

  useEffect(() => {
    searchedSpell !== "" &&
      get(
        `${
          process.env.REACT_APP_LOCAL_PROXY
        }https://www.dnddeutsch.de/tools/json.php?s=${encodeURIComponent(
          _name
        )}&o=dict&mi=on&mo=on&sp=on&it=on&misc=on`,
        setGermanSpell,
        "result"
      );
  }, [_name, searchedSpell]);

  useEffect(() => {
    setSpells(sortedSearch(copySpells, "name", search));
  }, [copySpells, search]);

  return (
    <>
      <input
        onChange={(e) => setSearch(e.currentTarget.value.toLowerCase())}
        placeholder="Search..."
      />
      <button onClick={() => setShowSpell("")}>SpellList</button>
      {showSpell && germanSpell ? (
        <>{renderSpell(showSpell, germanSpell[0])}</>
      ) : (
        <div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "12rem" }}>Name</div>
            <div>Spellslot Level</div>
            <div>Classes</div>
          </div>
          {spells.map((spell) => (
            <div
              key={spell.index}
              style={{ display: "flex", flexDirection: "row" }}
            >
              <div
                style={{
                  cursor: "pointer",
                  marginRight: "1rem",
                  width: "12rem",
                }}
                onClick={() => setSearchedSpell(spell)}
              >
                {spell.name}
              </div>
              {/* <div style={{ marginRight: "1rem" }}>{`Level: 1`}</div>
              <div>{`[a,b,c]`}</div> */}
            </div>
          ))}
          {/* {console.log(spells)} */}
        </div>
      )}
    </>
  );
};

const renderSpell = (spell, germanSpell) => (
  <>
    <div>{`${spell.name} // ${germanSpell.name_de}`}</div>
    <div>
      {spell.desc.map((a) => (
        <div key={a}>{a}</div>
      ))}
    </div>
    <div>{spell.higher_level && spell.higher_level}</div>
    <div>{`Eng: ${spell.page} // DE: ${germanSpell.src_de.book}, ${germanSpell.src_de.book_long}, ${germanSpell.src_de.p}`}</div>
    <div>{spell.range}</div>
    <div>
      {spell.components.map((component) => (
        <div key={component}>{component}</div>
      ))}
    </div>
    <div>{spell.material}</div>
    <div>{spell.ritual}</div>
    <div>{spell.duration}</div>
    <div>{spell.concentration}</div>
    <div>{spell.casting_time}</div>
    <div>{`Level: ${spell.level}`}</div>
    <div>{spell.school.name}</div>
    <div>
      {spell.classes.map((_class) => (
        <div key={_class.url}>{_class.name}</div>
      ))}
    </div>
    <div>
      {spell.subclasses.map((sc) => (
        <div key={sc.url}>{sc.name}</div>
      ))}
    </div>
  </>
);

export { Spells };
