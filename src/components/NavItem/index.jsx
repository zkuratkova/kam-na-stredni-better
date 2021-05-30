import React from 'react';

import { NavHashLink as NavLink } from 'react-router-hash-link';
import './style.css';

const NavItem = (props) => {
  return (
    <li className="nav__list-item">
      <NavLink
        className="nav__link"
        smooth
        to={props.href}
        activeClassName="active"
      >
        {props.textContent}
      </NavLink>
    </li>
  );
};

export default NavItem;
