import React from 'react';
import logoProjekt from './logo-projekt-budoucnost.svg';
import Nav from '../Nav';
import './style.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img
          className="header__logo"
          src={logoProjekt}
          alt="Logo Projekt Budoucnost"
          width="100"
        />
        <p className="header__title"></p>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
