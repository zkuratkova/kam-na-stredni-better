import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Quiz from '../../components/Quiz';
import Video from '../../components/Video';
import Worksheet from '../../components/Worksheet';
import BtnGroup from '../../components/BtnGroup';
import { lekce } from '../../Data/lekce';
import './style.css';

const Lesson = () => {
  // useParams from react-router-dom
  // :id lekce

  let { id: cisloLekce } = useParams();
  cisloLekce = Number(cisloLekce);

  const aktualniLekce = lekce[cisloLekce - 1]; //zobrazení správného prvku v poli

  return (
    <div id="lesson" className="lesson" key={cisloLekce}>
      <h1 className="lesson__title lesson__title--main">
        {aktualniLekce.lessonNumber}
      </h1>

      <h2 className="lesson__title lesson__title--underlined">
        {aktualniLekce.lessonTitleMain}
      </h2>
      <Video source={aktualniLekce.lessonVideo} />
      <BtnGroup cisloLekce={cisloLekce} lekce={lekce} />
      <Worksheet url={aktualniLekce.lessonDownloadURL} />
      {aktualniLekce.content.map((content, index) => {
        return (
          <Fragment key={index}>
            {content.titulek ? (
              <h2 className="lesson__title lesson__title--underlined-right">
                {content.titulek}
              </h2>
            ) : null}
            {content.podtitulek ? (
              <h3 className="lesson__title">{content.podtitulek}</h3>
            ) : null}

            <p>{content.text}</p>

            {content.seznam &&
              content.seznam.map((subcontent, subindex) => {
                return (
                  <ul>
                    {subcontent ? (
                      <li key={index + '_' + subindex}>{subcontent}</li>
                    ) : null}
                  </ul>
                );
              })}
          </Fragment>
        );
      })}

      <Quiz idLekce={cisloLekce} />
    </div>
  );
};

export default Lesson;
