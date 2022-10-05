import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';
import { Footer } from './Footer';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
