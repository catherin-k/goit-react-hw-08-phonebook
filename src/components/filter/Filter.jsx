import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import { changeFilter } from 'redux/contacts/contacts-slice';

import { FilterBox } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);

  const filterInput = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <FilterBox>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" name="filter" value={filter} onChange={filterInput} />
    </FilterBox>
  );
};
