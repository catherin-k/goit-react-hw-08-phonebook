import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(authSelectors.getUser);
  return (
    <>
      <span>Wellcome, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </>
  );
};
