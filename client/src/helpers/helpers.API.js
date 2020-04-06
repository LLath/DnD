import PropTypes from "prop-types";
export const get = (url, _function, _key = "") => {
  fetch(`${url}`, { mode: "cors" })
    .then((response) => response.json())
    .then((data) => (_key !== "" ? _function(data[_key]) : _function(data)))
    .catch((error) => console.error(error));
};
get.propTypes = {
  url: PropTypes.string.isRequired,
  _function: PropTypes.func.isRequired,
  _type: PropTypes.string,
};
