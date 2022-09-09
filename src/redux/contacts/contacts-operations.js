import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const getContacts = createAsyncThunk('contacts/getContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    console.log(error);
  }
});

const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }) => {
    try {
      const res = await axios.post('/contacts', { name, number });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const deleteContacts = createAsyncThunk('contacts/deleteContacts', async id => {
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    console.log(error);
  }
});

const contactsOperations = {
  getContacts,
  addContacts,
  deleteContacts,
};

export default contactsOperations;
