import React from 'react';
import NavItem from '../NavItem';
import './style.css';

const Nav = () => {
  const navigation = [
    { text: 'Domů', href: '/' },
    { text: 'Lekce', href: '/souhrn-lekci' },
    { text: 'Užitečné informace', href: '/' },
    { text: 'Kontakty', href: '/' },
  ];

  return (
    <nav className="nav">
      <ul className="nav__list nav__list--close">
        {navigation.map((item) => (
          <NavItem key={item.text} textContent={item.text} href={item.href} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
