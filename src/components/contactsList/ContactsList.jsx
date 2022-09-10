import { ContactItem } from './ContactItem';
import { List } from './ContactsList.styled';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux/es/exports';

import { contactsOperations, contactsSelectors } from 'redux/contacts';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContactsList);
  const filterValue = useSelector(contactsSelectors.getFilter);

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <List>
      {contacts &&
        getVisibleContacts().map(contact => (
          <ContactItem contact={contact} key={contact.id} />
        ))}
    </List>
  );
};
