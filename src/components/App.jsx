import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Routes, Route } from 'react-router-dom';
import { authOperations, authSelectors } from 'redux/auth';
import { ShareLayout } from './shareLayout/ShareLayout';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(authSelectors.getIsRefreshingUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshingUser ? (
        <h1>Loading...</h1>
      ) : (
        <Routes>
          <Route path="/" element={<ShareLayout />}>
            <Route
              index
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted redirectTo="/contacts">
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute restricted redirectTo="/contacts">
                  <RegisterPage />
                </PublicRoute>
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};
