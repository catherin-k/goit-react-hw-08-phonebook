import { Formik, ErrorMessage } from 'formik';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FormBox,
  Label,
  Input,
  SubmitBtn,
  ErrText,
} from '../components/formContacts/FormContacs.styled';

const LoginPage = () => {
  const submitForm = ({ email, password, name }, { resetForm }) => {
    console.log(email);
    console.log(password);
    console.log(name);
    // Check for the same name
    // const contactsUnicName = contacts.some(
    //   item => item.name.toLowerCase() === name.toLowerCase()
    // );

    // Add contact by condition
    // contactsUnicName
    //   ? toast.warn(` ${name} is already in contacts`)
    //   : addContact({ name, phone });

    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '', name: '' }}
      onSubmit={submitForm}
    >
      <FormBox autoComplete="off">
        <Label htmlFor="email">
          Email
          <Input type="email" name="email" required placeholder="email"></Input>
          <ErrorMessage name="email" render={msg => <ErrText>{msg}</ErrText>} />
        </Label>
        <Label htmlFor="password">
          Password
          <Input
            type="password"
            name="password"
            required
            placeholder="password"
          ></Input>
          <ErrorMessage
            name="password"
            render={msg => <ErrText>{msg}</ErrText>}
          />
        </Label>
        <SubmitBtn type="submit">Log in</SubmitBtn>
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
export default LoginPage;
