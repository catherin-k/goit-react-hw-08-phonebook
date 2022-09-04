import PropTypes from 'prop-types';
import { Item, DeleteBtn, Phone, Name } from './ContactItem.styled';

export const ContactItem = ({ contact, delContact }) => {
  const { name, phone, id } = contact;
  return (
    <Item>
      <Name>{name}:</Name>
      <Phone>{phone}</Phone>
      <DeleteBtn type="button" onClick={() => delContact(id)}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string),
  delContact: PropTypes.func,
};
