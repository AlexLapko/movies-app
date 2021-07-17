import React from "react";
import './Header.sass'
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <div className="header">
      <div className="container">
        <span className="header__logo">
          Logo
        </span>
        <div className="auth">
          <NavLink to={`/signIn`} className="auth__btn">
            Sign In / Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
