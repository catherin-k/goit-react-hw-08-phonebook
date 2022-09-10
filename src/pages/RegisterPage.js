import { Formik, ErrorMessage } from 'formik';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormBox, Label, Input, SubmitBtn, ErrText } from './Pages.styled';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  password: yup
    .string()
    .min(7, 'Password must be at least 8 characters long')
    .required('Password is required'),
  email: yup.string().email().required('Email is required'),
});

const RegisterPage = () => {
  const dispatch = useDispatch();

  const submitForm = (values, { resetForm }) => {
    // console.log(email);
    // console.log(password);
    // console.log(name);
    dispatch(authOperations.register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={submitForm}
    >
      <FormBox autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input type="text" name="name" required placeholder="name"></Input>
          <ErrorMessage name="name" render={msg => <ErrText>{msg}</ErrText>} />
        </Label>
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
        <SubmitBtn type="submit">Register</SubmitBtn>
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
export default RegisterPage;

// disabled={isLoading}
