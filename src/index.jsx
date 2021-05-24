import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './components/Header';

const App = () => (
  <div className="wrapper">
    <Header />
    <main className="home">
      <h1 className="home__title home__title--main">Kam na střední</h1>
      <div className="video__container">
        <iframe
          className="video__video"
          src="https://www.youtube.com/embed/AtvGpBC_6Ew"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <section className="intro">
        <h2 className="intro__title intro__title--underlined">Online kurz</h2>
        <p className="intro__text">
          Máš emoce na pochodu? Stresuje tě představa, že se máš rozhodnout kam
          na střední školu a prostě nevíš? Nezoufej. 😉 Hledáš pomoc s výběrem
          střední školy? Jsi tu správně. 😉
        </p>
      </section>
      <div className="link-lesson">
        <p className="link-lesson__text">
          Víme, že se nejedná o snadné rozhodnutí. Z tohoto důvodu jsme pro tebe
          připravili online kurz, který ti usnadní přemýšlení. Klikni na odkaz a
          udělej první krok k výběru správné školy hned teď.
        </p>
        <button className="btn" href="souhrn-lekci.html">
          Vstoupit do online kurzu
        </button>
      </div>
      <section id="informations" className="informations">
        <h2 className="informations__title informations__title--underlined-right">
          Užitečné informace
        </h2>
        <p className="informations__text">
          Už víš, kam by ses chtěl po základní škole vydat? Paráda! Koukni na
          odkazy níže, ve kterých najdeš úplné přehledy škol a jejich oborů.
        </p>
      </section>
      <section id="contacts" className="contacts">
        <h2 className="contacts__title contacts__title--underlined">
          Kontakty
        </h2>
        <p className="contacts__text">
          Prošel sis všechny videa, vyplnil pracovní listy, přemýšlení ti
          zabralo hodně času, ale výsledek stále nikde a přihláška je stále
          prázdná? Nevěš hlavu. My tě v tom samotného nenecháme. Níže najdeš
          všechny potřebné kontakty. Obrať se na nás emailem, zavolej nám, nebo
          si rovnou vyber volný termín v našem kalendáři. Společně vymyslíme
          cestu, kterou se po základní škole vydáš.
        </p>
        <a
          className="btn"
          href="https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUpaSFoxcUwzQ25hfGRlZmF1bHR8YzE1ZjY4ZGViY2YxYjJiNDE1YTQ4YTlkYTkxNDMwZmE"
        >
          Vyhledat termín konzultace online
        </a>
        <div className="contact">
          <h3 className="contact__title">Václav Flíček</h3>
          <div className="container--contact">
            <div className="column--contact">
              <img
                className="contact__img"
                src="images/Václav-Flíček_profil-300x200.jpg"
                alt="Václav Flíček"
              />
            </div>
            <div className="column--contact">
              <p className="contact__text">
                Miluje příběhy, a díky tomu vystudoval filmovou školu. Schopnost
                vyprávění maximálně zúročuje hlavně při přípravě her a audio
                příběhů. Zajímá se o propojování lidí. Uvědomil si, v čem
                spočívá význam slova spolupráce a těší se z pokroků, které se
                díky tomu dějí. Velkou radost mu dělá podporující manželka a dvě
                krásné dcerky.
              </p>
              <p className="contact__mail">e-mail: vflicek@probud.cz</p>
            </div>
          </div>
        </div>
        <div className="contact">
          <h3 className="contact__title">Zdeněk Sklenář</h3>
          <div className="container--contact">
            <div className="column--contact">
              <img
                className="contact__img"
                src="images/Zdeněk-Sklenář-1.jpg"
                alt="Zdeněk Sklenář"
              />
            </div>
            <div className="column--contact">
              <p className="contact__text">
                Vystupování na veřejnosti je pro něj přirozené stejně jako práce
                s dětmi. Od začátku vzal projekt za svůj a vkládá do něj
                obrovské množství energie. Utvrzuje se v přesvědčení, že
                budoucnost našich dětí je závislá na otevřené spolupráci s nimi,
                dostatečném prostoru a respektu. S manželkou Jitkou vychovává
                dva zvídavé, zdravé kluky.
              </p>
              <p className="contact__mail">e-mail: zsklenar@probud.cz</p>
              <p className="contact__phone">tel: 777586069</p>
            </div>
          </div>
          <div className="contact-main">
            <h3 className="contact__title">Projekt Budoucnost z.s.</h3>
            <p className="contact__info">
              Jirsíkova 348/17 <br />
              373 72, Lišov <br />
              IČ: 08266972 <br />
              Transparentní účet: 2701720739 / 2010 <br />
              Spolek zapsaný u Krajského soudu v Českých Budějovicích od
              9.července 2019.
            </p>
          </div>
        </div>
      </section>
    </main>
    <footer className="footer">
      Copyright © Projekt Budoucnost, z.s. 2021
    </footer>
  </div>
);

render(<App />, document.querySelector('#app'));
