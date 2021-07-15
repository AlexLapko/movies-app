import React from "react";
import './Header.sass'

const Header = () => {

  return (
    <div className="header">
      <div className="container">
        <span className="header__logo">
          Logo
        </span>
        <div className="auth">
          <a className="auth__btn" href="/">Sign In / Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
