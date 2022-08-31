// import { useState } from 'react';
import {
  getContacts,
  getFilter,
  addContact,
  deleteContact,
} from '../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux/es/exports';
// import { increment, getClicks, reset } from '../redux/clicksSlice';

import { nanoid } from 'nanoid';
import { Box } from './Box';
import { Title } from './App.styled';
import { FormContacts } from './formContacts/FormContacts';
import { ContactList } from './contactsList/ContactsList';
import { Filter } from './filter/Filter';
// import { useLocalStorage } from '../hooks/useLocalStorage';

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export const App = () => {
  // const dispatch = useDispatch();
  // const numberOfClicks = useSelector(getClicks);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  // const [filter, setFilter] = useState('');

  const submitForm = (values, { resetForm }) => {
    const person = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    )
      ? alert(`This ${values.name} is already in contacts`)
      : dispatch(addContact(person));

    resetForm();
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const delContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Box bg="lavender" width="50%" mx="auto" p="4" my="4" boxShadow="boxShadow">
      {/* <button type="button" onClick={() => dispatch(increment(2))}>
        {numberOfClicks}
      </button>
      <button type="button" onClick={() => dispatch(reset())}>
        reset
      </button> */}
      <Title>Phonebook</Title>
      <FormContacts submitForm={submitForm} />
      <Title>Contacts</Title>
      <Filter />

      <ContactList contacts={getVisibleContacts()} delContact={delContact} />
    </Box>
  );
};
