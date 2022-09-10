import { Outlet } from 'react-router-dom';

import { AppBar } from 'components/appBar/AppBar';
import { Suspense } from 'react';
import { Container } from './ShareLayout.styled';

export const ShareLayout = () => {
  return (
    <>
      <Container>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
