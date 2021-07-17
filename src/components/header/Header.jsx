import React from "react";
import './Header.sass'
import { NavLink } from 'react-router-dom';
import homeIcon from '../../icons/home.svg'

const Header = () => {

  return (
    <div className="header">
      <div className="container">
        <NavLink to={'/'} className="header__home-btn">
          <img src={homeIcon} alt="" />
        </NavLink>
        <div className="auth">
          <NavLink to={`/signIn`} className="btn auth__btn">
            Sign In / Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
