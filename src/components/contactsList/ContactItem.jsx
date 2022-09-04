import PropTypes from 'prop-types';
import { Item, DeleteBtn, Phone, Name } from './ContactItem.styled';
import { useDeleteContactMutation } from '../../redux/contactsApiSlice';

export const ContactItem = ({ contact }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const { name, phone, id } = contact;
  return (
    <Item>
      <Name>{name}:</Name>
      <Phone>{phone}</Phone>
      <DeleteBtn
        type="button"
        disabled={isLoading}
        onClick={() => deleteContact(id)}
      >
        Delete
      </DeleteBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string),
};
