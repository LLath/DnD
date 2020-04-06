import React, { useEffect, useState } from "react";
import { sortedSearch, get } from "../../helpers/index.helpers";
import { Clickable, Input, Button } from "../../styles/styles";
import { Flex, TextContainer } from "../../styles/styles.container";

const Spells = () => {
  const [spells, setSpells] = useState(
    JSON.parse(localStorage.getItem("Spells"))
  );
  const [searchedSpell, setSearchedSpell] = useState("");
  const [showSpell, setShowSpell] = useState("");
  const [germanSpell, setGermanSpell] = useState("");
  const [search, setSearch] = useState("");
  const [copySpells] = useState([...spells]);
  const [checkedSpell, setCheckedSpell] = useState("");
  const [spellList, setSpellList] = useState([]);

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

  useEffect(() => {
    const _function = (data) => setSpellList([...spellList, data]);
    checkedSpell &&
      get(
        `${process.env.REACT_APP_LOCAL_PROXY}http://dnd5eapi.co${checkedSpell.url}`,
        _function
      );
  }, [checkedSpell]);

  useEffect(() => {
    console.log(spellList);
  }, [spellList.length]);

  return (
    <>
      <Input
        onChange={(e) => setSearch(e.currentTarget.value.toLowerCase())}
        placeholder="Search..."
      />
      <Flex>
        <div>
          {spells.map((spell) => (
            <Flex key={spell.index} row>
              <Clickable onClick={() => setSearchedSpell(spell)}>
                {spell.name}
              </Clickable>
              {/* TODO: redesign */}
              <Button size="small" onClick={() => setCheckedSpell(spell)}>
                ✔
              </Button>
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
    <div style={{ borderBottom: "1px solid black", paddingBottom: "1rem" }}>
      <p>{`Find it in: `}</p>
      <div>{`Eng: ${spell.page}`}</div>
      <div>{`DE: ${germanSpell.src_de.book}, ${germanSpell.src_de.book_long}, ${germanSpell.src_de.p}`}</div>
    </div>
    <p>{`Range: ${spell.range}`}</p>
    <div style={{ paddingBottom: "1rem" }}>
      <div>Material:</div>
      {spell.components.map((component, index) => (
        <span key={component}>{`${component}${
          index < spell.components.length - 1 ? "," : ""
        }`}</span>
      ))}
      <div>{spell.material}</div>
    </div>
    <div>{spell.ritual && "Ritual"}</div>
    <div>Duration:{spell.duration}</div>
    <div>Concentration:{spell.concentration}</div>
    <div>Casting time:{spell.casting_time}</div>
    <div>{`Level: ${spell.level}`}</div>
    <div>Spell school:{spell.school.name}</div>
    <div>
      {spell.classes.map((_class, index) => (
        <span key={_class.url}>{`${_class.name}${
          index < spell.classes.length - 1 ? "," : ""
        }`}</span>
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
