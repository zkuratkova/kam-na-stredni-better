import React, { useState } from 'react';
import { quiz } from '../../Data/quiz';
import { useParams } from 'react-router-dom';
import QuizBtn from '../../components/QuizBtn';

const Quiz = (props) => {
  let { id: idLekce } = useParams();
  idLekce = idLekce - 1;
  const aktualniLekce = quiz[idLekce];
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
          isRight={true}
          isDisabled={answerResult === 'right' ? true : false}
          onRightClick={onRightAnswerClicked}
          onWrongClick={onWrongAnswerClick}
        />
        <QuizBtn
          answerText={aktualniLekce.answer2}
          isRight={false}
          isDisabled={answerResult === 'right' ? true : false}
          onRightClick={onRightAnswerClicked}
          onWrongClick={onWrongAnswerClick}
        />
        <QuizBtn
          answerText={aktualniLekce.answer3}
          isRight={false}
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
              <button className="btn btn--right">Další lekce</button>
            </>
          )}
          {answerResult === 'wrong' && (
            <>
              <p className="quiz__text quiz__text--wrong">
                Ou. Chyba. Zkusíš to znovu?
              </p>
              <button className="btn">Další lekce</button>
            </>
          )}
          {answerResult === 'not-answered' && (
            <button className="btn">Další lekce</button>
          )}
        </div>
      </form>
    </>
  );
};

export default Quiz;
