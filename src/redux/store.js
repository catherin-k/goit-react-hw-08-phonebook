import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { ContactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: ContactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
// export const increment = createAction('clicks/increment');

// const clicksReducer = createReducer(
//   { value: 12 },
//   {
//     [increment]: (state, action) => {
//       state.value = state.value + action.payload;
//     },
//   }
// );

// const clicksSlice = createSlice({
//   name: 'clicks',
//   initialState: { value: 12 },
//   reducers: {
//     increment(state, action) {
//       state.value = state.value + action.payload;
//     },
//   },
// });
// export const { increment } = clicksSlice.actions;
