import React, { useState } from 'react';
import Btn from '../Btn';
import { quiz } from '../../Data/quiz';
import { useParams } from 'react-router-dom';

const Quiz = (props) => {
  let { id: idLekce } = useParams();
  idLekce = idLekce - 1;
  const aktualniLekce = quiz[idLekce];

  const [answerResult, setAnswerResult] = useState('not-answered'); // right, wrong, not-answered

  return (
    <>
      <form
        className={`quiz ${answerResult === 'right' && 'quiz--right'} ${
          answerResult === 'wrong' && 'quiz--wrong'
        } `}
      >
        <p className="quiz__question">{aktualniLekce.question}</p>
        <div className="quiz__answer">
          <label>
            <input type="radio" name="quiz" id="first" />
            1.{aktualniLekce.answer1}
          </label>
        </div>
        <div className="quiz__answer">
          <label>
            <input type="radio" name="quiz" id="second" />
            2.{aktualniLekce.answer2}
          </label>
        </div>
        <div className="quiz__answer">
          <label>
            <input type="radio" name="quiz" id="third" />
            3.{aktualniLekce.answer3}
          </label>
        </div>
        <div className="quiz__btn">
          {answerResult === 'right' && (
            <p className="quiz__text quiz__text--right">
              Super! Máš to správně. Chceš jít dál?
            </p>
          )}
          {answerResult === 'wrong' && (
            <>
              <p className="quiz__text quiz__text--wrong">
                Ou. Chyba. Zkusíš to znovu?
              </p>
              <Btn text={'Zkus to znovu'} btnType={'secondary'} />
            </>
          )}
          <Btn
            text={answerResult === 'right' ? 'Další lekce' : 'Odeslat'}
            btnType={answerResult === 'right' ? 'right' : 'link'}
            linkTo={'/lekce'}
          />
        </div>
      </form>
    </>
  );
};

export default Quiz;
