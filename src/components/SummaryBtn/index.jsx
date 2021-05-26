import React from 'react';
import { Link } from 'react-router-dom';

const SummaryBtn = () => (
  <button className="btn">
    <Link className="btn" to="/lekce">
      Otevřít lekci
    </Link>
  </button>
);

export default SummaryBtn;
