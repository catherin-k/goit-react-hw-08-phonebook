import { NavLink } from 'react-router-dom';
export const AuthNav = () => {
  return (
    <>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </>
  );
};
