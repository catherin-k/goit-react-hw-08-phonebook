import PropTypes from 'prop-types';
import { Item, DeleteBtn, Phone, Name } from './ContactItem.styled';

import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const { name, number, id } = contact;
  return (
    <Item>
      <Name>{name}:</Name>
      <Phone>{number}</Phone>
      <DeleteBtn
        type="button"
        onClick={() => dispatch(contactsOperations.deleteContacts(id))}
      >
        Delete
      </DeleteBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string),
};
