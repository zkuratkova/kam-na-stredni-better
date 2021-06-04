import React from 'react';
import './style.css';
import flicek from './Václav-Flíček_profil-300x200.jpg';
import sklenar from './Zdeněk-Sklenář-1.jpg';

const Contact = () => {
  return (
    <>
      <div className="contact">
        <h3 className="contact__title">Václav Flíček</h3>
        <div className="container--contact">
          <div className="column--contact">
            <img className="contact__img" src={flicek} alt="Václav Flíček" />
          </div>
          <div className="column--contact">
            <p className="contact__text">
              Miluje příběhy, a díky tomu vystudoval filmovou školu. Schopnost
              vyprávění maximálně zúročuje hlavně při přípravě her a audio
              příběhů. Zajímá se o propojování lidí. Uvědomil si, v čem spočívá
              význam slova spolupráce a těší se z pokroků, které se díky tomu
              dějí. Velkou radost mu dělá podporující manželka a dvě krásné
              dcerky.
            </p>
            <a className="contact__mail" href="mailto:vflicek@probud.cz">
              e-mail: vflicek@probud.cz
            </a>
          </div>
        </div>
      </div>
      <div className="contact">
        <h3 className="contact__title">Zdeněk Sklenář</h3>
        <div className="container--contact">
          <div className="column--contact">
            <img className="contact__img" src={sklenar} alt="Zdeněk Sklenář" />
          </div>
          <div className="column--contact">
            <p className="contact__text">
              Vystupování na veřejnosti je pro něj přirozené stejně jako práce s
              dětmi. Od začátku vzal projekt za svůj a vkládá do něj obrovské
              množství energie. Utvrzuje se v přesvědčení, že budoucnost našich
              dětí je závislá na otevřené spolupráci s nimi, dostatečném
              prostoru a respektu. S manželkou Jitkou vychovává dva zvídavé,
              zdravé kluky.
            </p>
            <a className="contact__mail" href="mailto:zsklenar@probud.cz">
              e-mail: zsklenar@probud.cz
            </a>
            <a className="contact__phone" href="tel:+420777586069">
              tel: 777586069
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
