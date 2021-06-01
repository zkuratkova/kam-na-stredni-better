import React, { useState } from 'react';
import './style.css';

const QuizBtn = (props) => {
  //v props budu potřebovat získat hodnotu o tom, jestli je to správná odpověď
  //funkce onRightAnswerClicked - zavolá se jen v případě, že je odpověď správná
  const [answered, setAnswered] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    {
      props.isRight ? props.onRightClick() : props.onWrongClick();
    }
    setAnswered(!answered);
  };
  return (
    <button
      onClick={handleClick}
      className={
        answered
          ? props.isRight
            ? 'btn--answered-right'
            : 'btn--answered'
          : 'btn--quiz'
      }
      disabled={answered ? true : props.isDisabled}
    >
      {props.answerText}
    </button>
  );
};

export default QuizBtn;
