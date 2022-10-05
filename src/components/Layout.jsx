import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';
import { Footer } from './Footer';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense>
<Outlet />
      </Suspense>
      
      <Footer />
    </div>
  );
};

export default Layout;
