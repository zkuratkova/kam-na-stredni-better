import React, { useState } from 'react';
import Btn from '../Btn';
import { quiz } from '../../Data/quiz';
import { useParams } from 'react-router-dom';

const Quiz = (props) => {
  let { id: idLekce } = useParams();
  idLekce = idLekce - 1;
  const aktualniLekce = quiz[idLekce];

  return (
    <>
      <form className="quiz">
        <p className="quiz__question">{aktualniLekce.question}</p>
        <div className="quiz__answer">
          <label>
            <input type="radio" name="quiz" id="first" />
            1. {aktualniLekce.answer1}
          </label>
        </div>
        <div className="quiz__answer">
          <label>
            <input type="radio" name="quiz" id="second" />
            2. {aktualniLekce.answer2}
          </label>
        </div>
        <div className="quiz__answer">
          <label>
            <input type="radio" name="quiz" id="third" />
            3. {aktualniLekce.answer3}
          </label>
        </div>
        <div className="quiz__btn">
          <Btn text={'Odeslat'} btnType={'btn'} />
        </div>
      </form>

      <form className="quiz quiz--right">
        <p className="quiz__question">
          Na co se buseš ptát svého okolí v souvislosti s hledáním vhodné školy?
        </p>
        <div className="quiz__answer">
          <label>
            <input type="radio" name="quiz" id="first" />
            1. Kam bys šel ty?
          </label>
        </div>
        <div className="quiz__answer">
          <label>
            <input type="radio" name="quiz" id="second" />
            2. Jak moc je pravděpodobné, že zdědím hrozně moc peněz a budu
            rentiér?
          </label>
        </div>
        <div className="quiz__answer">
          <label>
            <input type="radio" name="quiz" id="third" />
            3. Co na mě obdivuješ?
          </label>
        </div>
        <div className="quiz__btn">
          <p className="quiz__text quiz__text--right">
            Super! Máš to správně. Chceš jít dál?
          </p>
          <Btn text={'Další lekce'} linkTo={'/lekce'} btnType={'right'} />
        </div>
      </form>

      <form className="quiz quiz--wrong">
        <p className="quiz__question">
          Na co se buseš ptát svého okolí v souvislosti s hledáním vhodné školy?
        </p>
        <div className="quiz__answer">
          <label>
            <input type="radio" name="quiz" id="first" />
            1. Kam bys šel ty?
          </label>
        </div>
        <div className="quiz__answer">
          <label>
            <input type="radio" name="quiz" id="second" />
            2. Jak moc je pravděpodobné, že zdědím hrozně moc peněz a budu
            rentiér?
          </label>
        </div>
        <div className="quiz__answer">
          <label>
            <input type="radio" name="quiz" id="third" />
            3. Co na mě obdivuješ?
          </label>
        </div>
        <div className="quiz__btn">
          <p className="quiz__text quiz__text--wrong">
            Ou. Chyba. Zkusíš to znovu?
          </p>
          <button className="btn" type="reset">
            Zkusit znovu
          </button>
          <button className="btn btn--secondary">Další lekce</button>
        </div>
      </form>
    </>
  );
};

export default Quiz;