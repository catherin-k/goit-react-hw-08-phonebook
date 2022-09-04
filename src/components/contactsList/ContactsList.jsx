import { ContactItem } from './ContactItem';
import { List } from './ContactsList.styled';
import { useGetContactsQuery } from '../../redux/contactsApiSlice';
import { useSelector } from 'react-redux/es/exports';
import { getFilter } from '../../redux/filterSlice';

export const ContactList = () => {
  const { data } = useGetContactsQuery();
  const filterValue = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <List>
      {data &&
        getVisibleContacts().map(contact => (
          <ContactItem contact={contact} key={contact.id} />
        ))}
    </List>
  );
};
