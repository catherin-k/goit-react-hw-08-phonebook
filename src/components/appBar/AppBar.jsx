import { Header } from './AppBar.styled';
import { Navigation } from '../navigation/Navigation';
import { AuthNav } from '../authNav/AuthNav';
import { UserMenu } from '../userMenu/UserMenu';
export const AppBar = () => {
  return (
    <Header>
      <Navigation />
      {/* <UserMenu /> */}
      <AuthNav />
    </Header>
  );
};
