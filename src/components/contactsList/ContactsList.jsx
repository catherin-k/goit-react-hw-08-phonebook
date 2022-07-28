import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
import { List } from './ContactsList.styled';
export const ContactList = ({ contacts, delContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ContactItem
          contact={contact}
          key={contact.id}
          delContact={delContact}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }).isRequired
  ),
};
