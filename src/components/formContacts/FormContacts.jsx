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

import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/contactsApiSlice';

export const FormContacts = () => {
  const [addContact, { isLoading }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const submitForm = ({ name, phone }, { resetForm }) => {
    // Check for the same name
    const contactsUnicName = contacts.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );

    // Add contact by condition
    contactsUnicName
      ? toast.warn(` ${name} is already in contacts`)
      : addContact({ name, phone });

    resetForm();
  };

  return (
    <Formik initialValues={{ name: '', phone: '' }} onSubmit={submitForm}>
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
        <Label htmlFor="phone">
          Number
          <Input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="phone number"
          ></Input>
          <ErrorMessage name="phone" render={msg => <ErrText>{msg}</ErrText>} />
        </Label>
        <SubmitBtn type="submit" disabled={isLoading}>
          Add contact
        </SubmitBtn>
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
