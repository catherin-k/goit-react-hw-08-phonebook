import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      state.items = [action.payload, ...state.items];
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    filterValue(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const ContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact, filterValue } = contactsSlice.actions;
// Selectors
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
// const clicksSlice = createSlice({
//   name: 'clicks',
//   initialState: { value: 0 },
//   reducers: {
//     increment(state, action) {npm start
//       state.value = state.value + action.payload;
//     },
//     reset(state) {
//       state.value = 0;
//     },
//   },
// });

// export const clicksReducer = clicksSlice.reducer;
// export const { increment, reset } = clicksSlice.actions;
// export const getClicks = state => state.clicks.value;

// export const increment = createAction('clicks/increment');

// const clicksReducer = createReducer(
//   { value: 12 },
//   {
//     [increment]: (state, action) => {
//       state.value = state.value + action.payload;
//     },
//   }
// );
