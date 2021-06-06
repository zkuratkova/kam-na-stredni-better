import React from 'react';
import './style.css';

const Worksheet = (preps) => {
  return (
    <div className="worksheet-download">
      <p className="worksheet-download__text">
        K lekci si můžeš stáhnout pracovní list v PDF, své postřehy a poznámky
        si pak můžeš zapisovat přímo do něj. Odkaz je tady:
      </p>
      <a href={preps.url} className="btn download__btn" download>
        Pracovní list PDF
      </a>
    </div>
  );
};

export default Worksheet;
