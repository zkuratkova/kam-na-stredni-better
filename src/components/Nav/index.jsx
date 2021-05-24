import React from 'react';
import NavItem from '../NavItem';
import './style.css';

const Nav = () => {
  const navigation = [
    { text: 'Domů', href: 'index.html' },
    { text: 'Lekce', href: 'souhrn-lekci.html' },
    { text: 'Užitečné informace', href: '#informations' },
    { text: 'Kontakty', href: '#contacts' },
  ];

  return (
    <nav className="nav">
      <ul className="nav__list nav__list--close">
        {navigation.map((item) => (
          <NavItem key={item.href} textContent={item.text} href={item.href} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
