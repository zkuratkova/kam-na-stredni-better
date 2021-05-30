import React from 'react';

import { HashLink as Link } from 'react-router-hash-link';
import './style.css';

const NavItem = (props) => {
  return (
    <li className="nav__list-item">
      <Link className="nav__link" smooth to={props.href}>
        {props.textContent}
      </Link>
    </li>
  );
};

export default NavItem;
