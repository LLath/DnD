import React, { useEffect, useState } from "react";
import { get } from "../../helpers/index.helpers";
import PropTypes from "prop-types";
import { Equipment } from "../index.components";

const Class = (_class) => {
  const [levels, setLevels] = useState([]);
  const [weapon, setWeapon] = useState({});
  const [startingEq, setStartingEq] = useState("");

  useEffect(() => {
    Object.keys(_class).length > 0 &&
      get(
        `${process.env.REACT_APP_LOCAL_PROXY}http://dnd5eapi.co${_class.class_levels.url}`,
        setLevels
      );
  }, [_class.class_levels]);

  useEffect(() => {
    Object.keys(_class).length > 0 &&
      get(
        `${process.env.REACT_APP_LOCAL_PROXY}http://dnd5eapi.co${_class.starting_equipment.url}`,
        setStartingEq
      );
  }, [_class.starting_equipment]);

  return _class.length < 1 ? (
    <>{Equipment(weapon)}</>
  ) : (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {console.log(startingEq)}
      <div>
        <div>{`Class: ${_class.name}`}</div>
        <div>{`Hit die: ${_class.hit_die}`}</div>
        {/* <div>{_class.proficiency_choices}</div> */}
        <div>
          Proficiencies:
          {_class.proficiencies.map((v, index) => (
            <div
              key={v.name}
              onClick={() => setWeapon(_class.proficiencies[index])}
            >
              {v.name}
            </div>
          ))}
        </div>
        <div>
          Saving Throws:
          {_class.saving_throws.map((st) => (
            <div key={st.name}>{st.name}</div>
          ))}
        </div>
        {startingEq && (
          <div>
            Starting Equipment:{" "}
            <div>
              {startingEq.starting_equipment.map((v) => (
                <div>{v}</div>
              ))}
            </div>
            <div>{`Choices to make: ${startingEq.choices_to_make}`}</div>
          </div>
        )}
        <table>
          <thead>
            <td>Level</td>
            <td>Ability Score Bonus</td>
            <td>Proficiencie Bonus</td>
            <td>Feature Choice</td>
            <td>Features</td>
            {levels &&
              levels[0] &&
              levels[0].spellcasting &&
              Object.keys(levels[0].spellcasting).map((spellslot) => (
                <td>{renderSpellSlots(spellslot)}</td>
              ))}
            {/* <td>Class</td> */}
          </thead>
          <tbody>
            {levels.map((level) => (
              <tr>
                <td>{level.level}</td>
                <td>{level.ability_score_bonuses}</td>
                <td>{level.prof_bonus}</td>
                <td>
                  {level.feature_choices.map((v) => (
                    <div>{v.name}</div>
                  ))}
                </td>
                <td>
                  {level.features.map((feature) => (
                    <div>{feature.name}</div>
                  ))}
                </td>

                {level.spellcasting &&
                  Object.keys(level.spellcasting).map((v) => (
                    <td>{level.spellcasting[v]}</td>
                  ))}

                {/* <td>{level.class_specific}</td> */}
                {/* <td>{level.class.name}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
        <div>{console.log(_class)}</div>
        <div>
          Subclasses:
          {_class.subclasses.map((subclass) => (
            <div key={subclass.name}>{subclass.name}</div>
          ))}
        </div>
      </div>
      <div>{Equipment(weapon)}</div>
    </div>
  );
};

const renderSpellSlots = (slot) => {
  const cantrip = "Cantrips known";
  const spell = "Spell level";
  const known = (_spell) => {
    switch (_spell) {
      case "cantrips_known":
        return cantrip;
      case "spells_known":
        return "Spells known";
      default:
        return `${spell} ${_spell.slice(-1)}`;
    }
  };
  return known(slot);
};

export { Class };

get.propTypes = {
  _class: PropTypes.object.isRequired,
};
