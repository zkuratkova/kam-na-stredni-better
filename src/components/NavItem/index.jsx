import React from 'react';
import './style.css';

const NavItem = (props) => {
  return (
    <li className="nav__list-item">
      <a className="nav__link" href={props.href}>
        {props.textContent}
      </a>
    </li>
  );
};

export default NavItem;
