import React, { useState } from 'react';
import { quiz } from '../../Data/quiz';
import { useParams, Link } from 'react-router-dom';
import QuizBtn from '../../components/QuizBtn';
import './style.css';

const Quiz = () => {
  let { id: idLekce } = useParams();
  idLekce = Number(idLekce);
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
                <Link className="btn btn--right" to={'/'}>
                  zpět na hlavní stranu
                </Link>
              ) : (
                <Link className="btn btn--right" to={`/lekce/${idLekce + 1}`}>
                  Další lekce
                </Link>
              )}
            </>
          )}
          {answerResult === 'wrong' && (
            <>
              <p className="quiz__text quiz__text--wrong">
                Ou. Chyba. Zkusíš to znovu?
              </p>
              {idLekce === quiz.length ? (
                <Link className="btn" to={'/'}>
                  zpět na hlavní stranu
                </Link>
              ) : (
                <Link className="btn" to={`/lekce/${idLekce + 1}`}>
                  Další lekce
                </Link>
              )}
            </>
          )}
          {answerResult === 'not-answered' && (
            <>
              {idLekce === quiz.length ? (
                <Link className="btn" to={'/'}>
                  zpět na hlavní stranu
                </Link>
              ) : (
                <Link className="btn" to={`/lekce/${idLekce + 1}`}>
                  Další lekce
                </Link>
              )}
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default Quiz;
