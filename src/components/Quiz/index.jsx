import React, { useState } from 'react';
import { quiz } from '../../Data/quiz';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import QuizBtn from '../../components/QuizBtn';
import './style.css';

const Quiz = (props) => {
  let idLekce = props.idLekce;
  const aktualniLekce = quiz[idLekce - 1];
  //funkce kliknuto na správnou odpověď

  const [answerResult, setAnswerResult] = useState('not-answered'); // right, wrong, not-answered

  const onRightAnswerClicked = () => {
    setAnswerResult('right');
  };

  const onWrongAnswerClick = () => {
    setAnswerResult('wrong');
  };

  return (
    <>
      <form className="quiz">
        <p className="quiz__question">{aktualniLekce.question}</p>
        <QuizBtn
          answerText={aktualniLekce.answer1}
          isRight={aktualniLekce.rightAnswer === 1}
          isDisabled={answerResult === 'right' ? true : false}
          onRightClick={onRightAnswerClicked}
          onWrongClick={onWrongAnswerClick}
        />
        <QuizBtn
          answerText={aktualniLekce.answer2}
          isRight={aktualniLekce.rightAnswer === 2}
          isDisabled={answerResult === 'right' ? true : false}
          onRightClick={onRightAnswerClicked}
          onWrongClick={onWrongAnswerClick}
        />
        <QuizBtn
          answerText={aktualniLekce.answer3}
          isRight={aktualniLekce.rightAnswer === 3}
          isDisabled={answerResult === 'right' ? true : false}
          onRightClick={onRightAnswerClicked}
          onWrongClick={onWrongAnswerClick}
        />

        <div className="quiz__btn">
          {answerResult === 'right' && (
            <>
              <p className="quiz__text quiz__text--right">
                Super! Máš to správně. Chceš jít dál?
              </p>
              {idLekce === quiz.length ? (
                <NavLink className="btn btn--right" smooth to={'/#home'}>
                  zpět na hlavní stranu
                </NavLink>
              ) : (
                <NavLink
                  className="btn btn--right"
                  smooth
                  to={`/lekce/${idLekce + 1}#lesson`}
                >
                  Další lekce
                </NavLink>
              )}
            </>
          )}
          {answerResult === 'wrong' && (
            <>
              <p className="quiz__text quiz__text--wrong">
                Ou. Chyba. Zkusíš to znovu?
              </p>
              {idLekce === quiz.length ? (
                <NavLink className="btn" smooth to={'/#home'}>
                  zpět na hlavní stranu
                </NavLink>
              ) : (
                <NavLink
                  className="btn"
                  smooth
                  to={`/lekce/${idLekce + 1}#lesson`}
                >
                  Další lekce
                </NavLink>
              )}
            </>
          )}
          {answerResult === 'not-answered' && (
            <>
              {idLekce === quiz.length ? (
                <NavLink className="btn" smooth to={'/#home'}>
                  zpět na hlavní stranu
                </NavLink>
              ) : (
                <NavLink
                  className="btn"
                  smooth
                  to={`/lekce/${idLekce + 1}#lesson`}
                >
                  Další lekce
                </NavLink>
              )}
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default Quiz;
