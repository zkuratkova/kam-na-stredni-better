import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './style.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className="container--card">
        <h4 className="card__title">{props.cardTitle}</h4>
        <span className="card__number">{props.cardNumber}</span>
      </div>
      <p className="card__text">{props.cardText}</p>
      <NavLink to={`/lekce/${props.cardNumber}#lesson`} smooth className="btn">
        Otevřít lekci
      </NavLink>
    </div>
  );
};

export default Card;
