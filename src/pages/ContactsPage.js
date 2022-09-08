import { Box } from '../components/Box';
import { Title } from '../components/App.styled';
import { FormContacts } from '../components/formContacts/FormContacts.jsx';
import { ContactList } from '../components/contactsList/ContactsList';
import { Filter } from '../components/filter/Filter';

const ContactsPage = () => {
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
export default ContactsPage;
