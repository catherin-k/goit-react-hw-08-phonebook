import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Header } from './AppBar.styled';
import { Navigation } from '../navigation/Navigation';
import { AuthNav } from '../authNav/AuthNav';
import { UserMenu } from '../userMenu/UserMenu';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
