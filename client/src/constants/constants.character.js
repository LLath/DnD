import { string, number, oneOf, array } from "prop-types";

export const character = (validate) => ({
  name: string,
  level: number,
  proficiency: number,
  hit_point_type: oneOf(["Fixed", "Manual"]),
  stats: {
    strength: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number,
  },
  race: string,
  class: string,
  background: string,
  starting_equipment: array,
});
