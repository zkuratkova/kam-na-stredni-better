import React from 'react';
import Btn from '../Btn';
import './style.css';

const Card = () => (
  <div className="card">
    <div className="container--card">
      <h4 className="card__title">Název</h4>
      <span className="card__number">1</span>
    </div>
    <p className="card__text">K vypracování budeš potřebovat 30 minut</p>
    <Btn btnType={'link'} linkTo={'/lekce'} text={'Otevřít lekci'} />
  </div>
);

export default Card;
