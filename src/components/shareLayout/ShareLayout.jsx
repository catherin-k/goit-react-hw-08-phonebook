import { Outlet } from 'react-router-dom';
import { Box } from '../Box';
import { AppBar } from 'components/appBar/AppBar';
import { Suspense } from 'react';

export const ShareLayout = () => {
  return (
    <>
      <Box maxWidth={1440} margin="0, auto" px={16}>
        <AppBar />
        <Suspense>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};
