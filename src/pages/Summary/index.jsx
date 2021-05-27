import React from 'react';
import Card from '../../components/Card';
import './style.css';

const Summary = () => {
  return (
    <div className="summary">
      <h1 className="summary__title summary__title--main">Seznam lekcí</h1>
      <div className="container--summary">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Summary;
