import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Quiz from '../../components/Quiz';
import { lekce } from '../../Data/lekce';

const Lesson = () => {
  // useParams from react-router-dom
  // :id lekce

  let { id: cisloLekce } = useParams();
  cisloLekce = Number(cisloLekce);

  const aktualniLekce = lekce[cisloLekce - 1]; //zobrazení správného prvku v poli

  return (
    <div className="lesson">
      <h1 className="lesson__title lesson__title--main">
        {aktualniLekce.lessonNumber}
      </h1>

      <h2 className="lesson__title lesson__title--underlined">
        {aktualniLekce.lessonTitleMain}
      </h2>

      <div className="video__container">
        <iframe
          className="video__video"
          src={aktualniLekce.lessonVideo}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="btn__group">
        {cisloLekce === 1 ? null : (
          <Link className="btn" to={`/lekce/${cisloLekce - 1}`}>
            ◀ Předchozí lekce
          </Link>
        )}
        {cisloLekce === 6 ? (
          <Link className="btn" to={'/'}>
            Konec kurzu, zpět na hlavní stranu ▶
          </Link>
        ) : (
          <Link className="btn" to={`/lekce/${cisloLekce + 1}`}>
            Následující lekce ▶
          </Link>
        )}
      </div>

      <div className="worksheet-download">
        <p className="worksheet-download__text">
          K lekci si můžeš stáhnout pracovní list v PDF, své postřehy a poznámky
          si pak můžeš zapisovat přímo do něj. Odkaz je tady:
        </p>
        <a href={aktualniLekce.lessonDownloadURL} className="btn" download>
          Pracovní list PDF
        </a>
      </div>
      {aktualniLekce.content.map((content) => {
        return (
          <>
            {content.titulek ? (
              <h2 className="lesson__title lesson__title--underlined-right">
                {content.titulek}
              </h2>
            ) : null}
            {content.podtitulek ? (
              <h3 className="lesson__title">{content.podtitulek}</h3>
            ) : null}
            <p className="lesson__text">{content.text}</p>
          </>
        );
      })}

      <Quiz />
    </div>
  );
};

export default Lesson;
