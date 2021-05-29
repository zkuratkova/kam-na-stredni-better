import React from 'react';
import { Link } from 'react-router-dom';

const Btn = (props) => {
  // {props.btnType === 'download' && 'download'}

  if (props.btnType === 'link') {
    return (
      <Link className="btn" to={props.linkTo}>
        {props.text}
      </Link>
    );
  } else if (props.btnType === 'ext' || props.btnType === 'download') {
    return (
      <a className="btn" href={props.linkTo}>
        {props.text}
      </a>
    );
  } else {
    let btnClass = 'btn';
    if (props.btnType === 'secondary' || props.btnType === 'right') {
      btnClass += ' ' + props.btnType;
    }
    return <button className={btnClass}>{props.text}</button>;
  }
};

export default Btn;
