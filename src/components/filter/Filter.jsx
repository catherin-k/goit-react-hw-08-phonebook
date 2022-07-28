import PropTypes from 'prop-types';
import { FilterBox } from './Filter.styled';
export const Filter = ({ onChange }) => {
  return (
    <FilterBox>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" name="filter" onChange={onChange} />
    </FilterBox>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
