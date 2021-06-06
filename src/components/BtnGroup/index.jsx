import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import arrowRight from './arrow-right.svg';
import arrowLeft from './arrow-left.svg';
import './style.css';

const BtnGroup = (props) => {
  return (
    <div className="btn__group">
      {props.cisloLekce === 1 ? null : (
        <NavLink
          className="btn"
          smooth
          to={`/lekce/${props.cisloLekce - 1}#lesson`}
        >
          <img src={arrowLeft} width="10" alt="icone arrow left" /> Předchozí
          lekce
        </NavLink>
      )}
      {props.cisloLekce === props.lekce.length ? (
        <NavLink className="btn" smooth to={'/#informations'}>
          Konec kurzu 🙂{' '}
          <img src={arrowRight} width="10" alt="icone arrow right" />
        </NavLink>
      ) : (
        <NavLink className="btn" smooth to={`/lekce/${props.cisloLekce + 1}`}>
          Následující lekce{' '}
          <img src={arrowRight} width="10" alt="icone arrow right" />
        </NavLink>
      )}
    </div>
  );
};

export default BtnGroup;
