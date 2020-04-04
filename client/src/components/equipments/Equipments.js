import React, { useEffect, useState } from "react";
import { get } from "../../helpers/helpers.API";
import PropTypes from "prop-types";

const Equipment = (data) => {
  const [eqType, setEqType] = useState({});
  const [eq, setEq] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Object.keys(data).length > 0 &&
      get(
        `${process.env.REACT_APP_LOCAL_PROXY}http://dnd5eapi.co${data.url}`,
        setEqType
      );
  }, [data.url]);

  useEffect(() => {
    Object.keys(eqType).length > 0 &&
      categories.map((v) => v.index.includes(eqType.index)) &&
      get(
        `${process.env.REACT_APP_LOCAL_PROXY}http://dnd5eapi.co/api/equipment-categories/${eqType.index}`,
        setEq
      );
  }, [eqType]);

  useEffect(() => {
    get(
      `${process.env.REACT_APP_LOCAL_PROXY}http://dnd5eapi.co/api/equipment-categories/`,
      setCategories,
      "results"
    );
  }, [data]);

  return (
    <>
      {Object.keys(eqType).length > 0 ? (
        <>
          {/* {weaponObj && Object.keys(weaponObj).map((obj) => <div>{obj}</div>)} */}
          <div>{eqType.type}</div>
          <div>{eqType.name}</div>
          <div>
            Classes:
            {eqType.classes.map((v) => (
              <div>{v.name}</div>
            ))}
          </div>
          <div>
            Races:
            {eqType.races.map((v) => (
              <div>{v.name}</div>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export { Equipment };

get.propTypes = {
  data: PropTypes.object.isRequired,
};
