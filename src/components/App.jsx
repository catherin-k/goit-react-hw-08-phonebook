import { Box } from './Box';
import { Title } from './App.styled';
import { FormContacts } from './formContacts/FormContacts';
import { ContactList } from './contactsList/ContactsList';
import { Filter } from './filter/Filter';

export const App = () => {
  return (
    <Box bg="lavender" width="40%" mx="auto" p="4" my="4" boxShadow="boxShadow">
      <Title>Phonebook</Title>
      <FormContacts />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Box>
  );
};
