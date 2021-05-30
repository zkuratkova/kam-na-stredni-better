import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className="container--card">
        <h4 className="card__title">{props.cardTitle}</h4>
        <span className="card__number">{props.cardNumber}</span>
      </div>
      <p className="card__text">{props.cardText}</p>
      <Link to={`/lekce/${props.cardNumber}`} className="btn">
        Otevřít lekci
      </Link>
    </div>
  );
};

export default Card;
