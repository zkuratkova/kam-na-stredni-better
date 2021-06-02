import React from 'react';
import Card from '../../components/Card';
import { cards } from '../../Data/cards';
import './style.css';

const Summary = () => {
  return (
    <>
      <div className="summary">
        <h1 className="summary__title summary__title--main">Seznam lekcí</h1>
        <div className="container--summary">
          {cards.map((card) => {
            return (
              <Card
                key={card.cardNumber}
                cardTitle={card.cardTitle}
                cardNumber={card.cardNumber}
                cardText={card.cardText}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Summary;
