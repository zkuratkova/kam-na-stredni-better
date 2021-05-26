import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const NavItem = (props) => {
  return (
    <li className="nav__list-item">
      <Link className="nav__link" to={props.href}>
        {props.textContent}
      </Link>
    </li>
  );
};

export default NavItem;
