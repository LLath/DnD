import React, { useEffect, useState } from "react";
import { sortedSearch, get } from "../../helpers/index.helpers";
import { Input } from "../../styles/styles";
import { Clickable, Flex, TextContainer } from "../../styles/styles.container";

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

  let _name = "";

  switch (searchedSpell.name) {
    case "Arcane Hand":
      _name = "Bigby's Hand";
      break;
    case "Acid Arrow":
      _name = "Melf's Acid Arrow";
      break;

    default:
      _name = searchedSpell.name;
      break;
  }

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
      <Input
        onChange={(e) => setSearch(e.currentTarget.value.toLowerCase())}
        placeholder="Search..."
      />
      <Flex>
        <div>
          {spells.map((spell) => (
            <Flex key={spell.index}>
              <Clickable onClick={() => setSearchedSpell(spell)}>
                {spell.name}
              </Clickable>
            </Flex>
          ))}
        </div>
        <div>
          {showSpell && germanSpell
            ? renderSpell(showSpell, germanSpell[0])
            : ""}
        </div>
      </Flex>
    </>
  );
};

const renderSpell = (spell, germanSpell) => (
  <TextContainer>
    <div>{`${spell.name} // ${germanSpell.name_de}`}</div>
    <div style={{ borderBottom: "1px solid black" }}>
      <p>Description:</p>
      {spell.desc.map((a) => (
        <p key={a}>{a}</p>
      ))}
    </div>
    <div>
      {spell.higher_level && (
        <div style={{ borderBottom: "1px solid black" }}>
          <p>Higher Level:</p>
          <p>{spell.higher_level}</p>
        </div>
      )}
    </div>
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
  </TextContainer>
);

export { Spells };
