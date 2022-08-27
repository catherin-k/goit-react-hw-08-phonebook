import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './Box';
import { Title } from './App.styled';
import { FormContacts } from './formContacts/FormContacts';
import { ContactList } from './contactsList/ContactsList';
import { Filter } from './filter/Filter';
import { useLocalStorage } from '../hooks/useLocalStorage';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  const [filter, setFilter] = useState('');

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
      : setContacts(prevState => [person, ...prevState]);

    resetForm();
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = id => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== id);
    });
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  return (
    <Box bg="lavender" width="50%" mx="auto" p="4" my="4" boxShadow="boxShadow">
      <Title>Phonebook</Title>
      <FormContacts submitForm={submitForm} />
      <Title>Contacts</Title>
      <Filter onChange={changeFilter} />

      <ContactList contacts={getVisibleContacts()} delContact={deleteContact} />
    </Box>
  );
};
