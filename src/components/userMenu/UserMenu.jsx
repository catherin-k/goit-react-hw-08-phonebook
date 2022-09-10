import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

import { Greeting, Img, UserMenuContainer, LogOut } from './UserMenu.styled';
import avatar from '../../images/avatar.png';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(authSelectors.getUser);
  return (
    <UserMenuContainer>
      <Img src={avatar} alt="avatar" />
      <Greeting>Wellcome, {name}</Greeting>
      <LogOut type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </LogOut>
    </UserMenuContainer>
  );
};
