import { Box } from 'components/Box';
import { LinkStyled } from './AuthNav.styled';
export const AuthNav = () => {
  return (
    <Box>
      <LinkStyled to="/register">Registration</LinkStyled>
      <LinkStyled to="/login">Log in</LinkStyled>
    </Box>
  );
};
