import React from 'react';
import SummaryBtn from '../SummaryBtn';

const Summary = () => {
  return (
    <div className="summary">
      <h1 className="summary__title summary__title--main">Seznam lekcí</h1>
      <div className="container--summary">
        <div className="card">
          <div className="container--card">
            <h4 className="card__title">Jaká nadání v práci uplatníš?</h4>
            <span className="card__number">1</span>
          </div>
          <p>K vypracování budeš potřebovat 30 minut</p>
          <SummaryBtn />
        </div>
        <div className="card">
          <div className="container--card">
            <h4 className="card__title">Název</h4>
            <span className="card__number">2</span>
          </div>
          <p className="card__text">K vypracování budeš potřebovat 30 minut</p>
          <SummaryBtn />
        </div>
        <div className="card">
          <div className="container--card">
            <h4 className="card__title">Název</h4>
            <span className="card__number">3</span>
          </div>
          <p className="card__text">K vypracování budeš potřebovat 30 minut</p>
          <SummaryBtn />
        </div>
        <div className="card">
          <div className="container--card">
            <h4 className="card__title">Název</h4>
            <span className="card__number">4</span>
          </div>
          <p className="card__text">K vypracování budeš potřebovat 30 minut</p>
          <SummaryBtn />
        </div>
        <div className="card">
          <div className="container--card">
            <h4 className="card__title">Název</h4>
            <span className="card__number">5</span>
          </div>
          <p className="card__text">K vypracování budeš potřebovat 30 minut</p>
          <SummaryBtn />
        </div>
        <div className="card">
          <div className="container--card">
            <h4 className="card__title">Název</h4>
            <span className="card__number">6</span>
          </div>
          <p className="card__text">K vypracování budeš potřebovat 30 minut</p>
          <SummaryBtn />
        </div>
      </div>
    </div>
  );
};

export default Summary;
