import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../navbar';
import Menu from '../menu';
import Footer from '../footer';
import { StateProvider } from '../../context';
import Modal from '../modal';

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <StateProvider>
      <Navbar />
      <Outlet />
      <Menu />
      {!/signin|signup|forgotpassword/.test(pathname) && (
        <>
          <Footer />
          <Modal />
        </>
      )}
    </StateProvider>
  );
};

export default Layout;
