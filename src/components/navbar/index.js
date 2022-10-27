import React, { useContext } from 'react';
import Logo from '../../assets/logo.webp';
import './navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StateContext } from '../../context';

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { dispatch } = useContext(StateContext);

  return (
    <nav className="navbar__container">
      <div className="navbar__image">
        <img src={Logo} alt="logo" loading="lazy" />
      </div>
      <ul className="navbar__actions">
        <li
          onClick={() => navigate('/')}
          style={{ color: pathname === '/' && 'red' }}>
          Home
        </li>
        <li onClick={() => dispatch({ type: 'OPEN_MENU' })}>
          Browse <i className="gg-chevron-down"></i>
        </li>
        <Link to="/signin">
          <li>Sign In</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
