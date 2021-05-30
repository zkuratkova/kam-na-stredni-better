import React, { useState } from 'react';
import NavItem from '../NavItem';
import './style.css';

const Nav = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const handleClick = () => setMenuOpened(!menuOpened);
  const navigation = [
    { text: 'Domů', href: '/' },
    { text: 'Lekce', href: '/souhrn-lekci' },
    { text: 'Užitečné informace', href: '/#informations' },
    { text: 'Kontakty', href: '#contacts' },
  ];

  return (
    <nav className="nav" onClick={handleClick}>
      <ul className={menuOpened ? 'nav__list' : 'nav__list nav__list--close'}>
        {navigation.map((item) => (
          <NavItem key={item.text} textContent={item.text} href={item.href} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
