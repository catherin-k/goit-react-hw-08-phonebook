import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const HomePage = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <h1>Wellcome to phonebook service!</h1>
      {!isLoggedIn ? (
        <>
          <p>If this is your first visit, please register</p>
          <p>Also if you are a registered user, please log in </p>
        </>
      ) : (
        <p>Good to see you here</p>
      )}
    </div>
  );
};

export default HomePage;
