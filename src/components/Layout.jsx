import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useContacts } from 'hooks/useContacts';
import { Loader } from './LoaderModal/LoaderModal';

export const Layout = () => {
  const { isLoading, error } = useContacts();

  return (
    <main>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {isLoading && !error && <Loader />}
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
};
