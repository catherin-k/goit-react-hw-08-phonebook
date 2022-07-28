import PropTypes from 'prop-types';
import { Item, DeleteBtn } from './ContactItem.styled';

export const ContactItem = ({ contact, delContact }) => {
  const { name, number, id } = contact;
  return (
    <Item>
      <p>{name}:</p>
      <p>{number}</p>
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
