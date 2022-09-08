// import { NavLink } from 'react-router-dom';
import { LinkStyled } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <LinkStyled to="/">Home</LinkStyled>
      {/* <Link>Contacts</Link> */}
    </nav>
  );
};
