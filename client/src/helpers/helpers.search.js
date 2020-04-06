import PropTypes from "prop-types";

export const sortedSearch = (_array, _key, _query = "") => {
  const _arrayFilter = _array.filter((v) =>
    v[_key].toLowerCase().includes(_query)
  );
  const posQuery = _arrayFilter.map((v) =>
    v[_key].toLowerCase().indexOf(_query)
  );
  const _arraySort = _arrayFilter
    .map((v, i) => ({ ...v, pos: posQuery[i] }))
    .sort((a, b) => a.pos - b.pos);
  return _arraySort;
};

sortedSearch.propTypes = {
  _array: PropTypes.array.isRequired,
  _key: PropTypes.string.isRequired,
  _query: PropTypes.string.isRequired,
};
