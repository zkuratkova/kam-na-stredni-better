import React from 'react';
import Btn from '../Btn';
import './style.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className="container--card">
        <h4 className="card__title">{props.cardTitle}</h4>
        <span className="card__number">{props.cardNumber}</span>
      </div>
      <p className="card__text">{props.cardText}</p>
      <Btn
        btnType={'link'}
        linkTo={`/lekce/${props.cardNumber}`}
        text={'Otevřít lekci'}
      />
    </div>
  );
};

export default Card;
