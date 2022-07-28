import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import {
  FormBox,
  Label,
  Input,
  SubmitBtn,
  ErrText,
} from './FormContacs.styled';

import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required(),
  number: Yup.string().required(),
});

export const FormContacts = ({ submitForm }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={submitForm}
      validationSchema={validationSchema}
    >
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
      </FormBox>
    </Formik>
  );
};

FormContacts.propTypes = {
  submitForm: PropTypes.func,
};
