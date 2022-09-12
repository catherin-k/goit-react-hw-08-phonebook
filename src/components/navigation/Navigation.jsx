// import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { LinkStyled } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <LinkStyled to="/">Home</LinkStyled>
      {isLoggedIn && <LinkStyled to="contacts">Contacts</LinkStyled>}
    </nav>
  );
};
