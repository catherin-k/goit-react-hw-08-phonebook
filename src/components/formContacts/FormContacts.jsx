import { Formik, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FormBox,
  Label,
  Input,
  SubmitBtn,
  ErrText,
} from './FormContacs.styled';

import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

export const FormContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContactsList);

  const submitForm = (value, { resetForm }) => {
    // Check for the same name
    const contactsUnicName = contacts.some(
      item => item.name.toLowerCase() === value.name.toLowerCase()
    );

    // Add contact by condition
    contactsUnicName
      ? toast.warn(` ${value.name} is already in contacts`)
      : dispatch(contactsOperations.addContacts(value));

    resetForm();
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={submitForm}>
      <FormBox>
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="full name"
          ></Input>
          <ErrorMessage name="name" render={msg => <ErrText>{msg}</ErrText>} />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="phone number"
          ></Input>
          <ErrorMessage
            name="number"
            render={msg => <ErrText>{msg}</ErrText>}
          />
        </Label>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
        <ToastContainer
          autoClose={3000}
          position="top-center"
          theme="colored"
          pauseOnHover
        />
      </FormBox>
    </Formik>
  );
};
