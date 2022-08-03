import Header from '../Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader';

const Layout = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<Loader size={'200px'} color={'#640a0a'} />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
