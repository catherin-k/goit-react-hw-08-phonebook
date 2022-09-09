import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';

const initialState = {
  items: [],
  filter: '',
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [contactsOperations.getContacts.fulfilled](state, action) {
      state.items = action.payload;
    },
    [contactsOperations.addContacts.fulfilled](state, action) {
      state.items = [action.payload, ...state.items];
    },
    [contactsOperations.deleteContacts.fulfilled](state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
