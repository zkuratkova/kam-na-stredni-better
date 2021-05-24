import React from 'react';
import Logo_Budouctnost from './Logo_Budouctnost_pruhledne_barevne.svg';
import Nav from '../Nav';
import './style.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img
          className="header__logo"
          src={Logo_Budouctnost}
          alt="Logo Projekt Budoucnost"
          width="40"
        />
        <p className="header__title">Projekt Budoucnost</p>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
