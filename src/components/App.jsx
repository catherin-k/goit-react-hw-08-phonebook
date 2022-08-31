import {
  getContacts,
  getFilter,
  addContact,
  deleteContact,
} from '../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import { nanoid } from 'nanoid';
import { Box } from './Box';
import { Title } from './App.styled';
import { FormContacts } from './formContacts/FormContacts';
import { ContactList } from './contactsList/ContactsList';
import { Filter } from './filter/Filter';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

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
      <Title>Phonebook</Title>
      <FormContacts submitForm={submitForm} />
      <Title>Contacts</Title>
      <Filter />

      <ContactList contacts={getVisibleContacts()} delContact={delContact} />
    </Box>
  );
};
