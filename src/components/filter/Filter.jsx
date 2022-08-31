import { useDispatch } from 'react-redux';
import { filterValue } from '../../redux/contactsSlice';
import { FilterBox } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const filterInput = e => {
    dispatch(filterValue(e.target.value));
  };

  return (
    <FilterBox>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" name="filter" onChange={filterInput} />
    </FilterBox>
  );
};
