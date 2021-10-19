import PropTypes from "prop-types";

export default function Filter({ filter, onFilterChange }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="find"
        onChange={(e) => onFilterChange(e.target.value)}
        value={filter}
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
