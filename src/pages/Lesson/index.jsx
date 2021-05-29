import React from 'react';
import Btn from '../../components/Btn';

const Lesson = () => {
  console.log(lekce);
  return (
    <div className="lesson">
      <h1 className="lesson__title lesson__title--main">Lekce 1</h1>

      <h2 className="lesson__title lesson__title--underlined">
        Jaká nadání v práci uplatníš?
      </h2>

      <div className="video__container">
        <iframe
          className="video__video"
          src="https://www.youtube.com/embed/sFi4FVGhXgM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="btn__group">
        <Btn text={'◀ Předchozí lekce'} linkTo={'/lekce'} btnType={'link'} />
        <Btn text={'Následující lekce ▶'} linkTo={'/lekce'} btnType={'link'} />
      </div>

      <div className="worksheet-download">
        <p className="worksheet-download__text">
          K lekci si můžeš stáhnout pracovní list v PDF, své postřehy a poznámky
          si pak můžeš zapisovat přímo do něj. Odkaz je tady:
        </p>
        <Btn
          text={'Pracovní list PDF'}
          btnType={'download'}
          linkTo={'download/'}
        />
      </div>
      <h3 className="lesson__title">Co mi dodává energii?</h3>
      <p className="lesson__text">
        Jak zjistit na co mám talent? To poznáš tak, že odhalíš, co ti dodává
        energii. Jasně, už slyším tvojí odpověď: „Spánek!“ Haha. Samozřejmě máš
        pravdu a kvalitní spánek je důležitý, avšak zaměř se na sebe teď, když
        jsi vzhůru. Co tě nabíjí? Co ti dodává energii? Napiš si všechno, co se
        ti teď vybavuje.
      </p>

      <h3 className="lesson__title">Co mě vybíjí?</h3>
      <p className="lesson__text">
        Nemáš nic? S tím si poradíme. Zeptej se sám sebe, co ti naopak energii
        vysává? Všechno si zapiš. Najít to, co nás vybíjí nebo k tomu máme
        dokonce odpor je totiž daleko lehčí. Někdo by mohl tento seznam nazvat
        tvými slabými stránkami. Skvělý, ať si to nazývá kdo chce, jak chce.
        Vědět o svých slabinách je dobré, ale to je asi tak všechno.
      </p>

      <h2 className="lesson__title lesson__title--underlined-right">
        Jak zjistit, v čem jsem dobrý?
      </h2>
      <p className="lesson__text">
        Vrátíme se k tomu podstatnému. Co jsou tvé silné stránky, talenty, jaký
        je tvůj potenciál? Člověk se rodí poskládaný z různých vlastností,
        povahových rysů a talentů. V tomto životě nemůže za to, s čím na svět
        přišel. Za co může je to, jak se svými talenty naloží. Ultimátní cíl
        zdravého života je: „Vědět o svých slabých stránkách a rozvíjet své
        talenty.“
      </p>
      <h3 className="lesson__title">Ptej se sám sebe: Co mi dodává energii?</h3>
      <p className="lesson__text">
        Zkus to znovu. Jak zjistit na co mám talent? Máš už seznam slabých
        stránek? Pokud ano, tak víš, jak na to. Najdi si klidné místo, požádej
        okolí, ať tě nikdo neruší. Nebo jdi do přírody, tam se totiž náramně
        dobře „přemýšlí.“ Přemýšlí není úplně ten správný výraz, protože
        potřebujeme, abychom se naopak dostali nad myšlenky. Když sami sobě
        pokládáme otázky, dáváme prostor intuici, nebo-li hlubokému myšlení. Tam
        se zpracovává obrovské množství dat, zážitků, prožitků,… Připrav se
        proto na to, že se odpověď nedostaví hned. Trvá to, obrň se trpělivostí.
        Odměnou ti bude, že dostaneš odpovědi, které jinou cestou nezískáš,
        dokonce ani za peníze. Na co mám talent? Co mi dodává energii? Co mě
        dokázalo nadchnout? Před čím jsem žasnul?
      </p>
      <h3 className="lesson__title">Ptej se ostatních: Co na mě obdivuješ?</h3>
      <p className="lesson__text">
        Když půjdeš po ulici a zeptáš se náhodného kolemjdoucího: „Co na mě
        obdivujete?,“ nejspíš se nesetkáš s pochopením, ale za ten vtípek to
        stojí. Musím to sám vyzkoušet. 😀 Správně, asi tě napadá, že takovou
        otázku musíš položit někomu blízkému, komu důvěřuješ. Je zajímavé, že
        lépe si všímáme ostatních, než sami sebe. S velkou pravděpodobností se
        dozvíš něco opravdu cenného.
      </p>
      <Quiz />
      <h2 className="lesson__title lesson__title--underlined">
        Už vím, na co mám talent
      </h2>
      <p className="lesson__text">
        Počítám, že když jsi se dočetl až sem, už víš o svých talentech. Talent
        nemusí být jeden veliký, může být víc malých, které spojením vytvoří
        něco božího. Vědět o svých talentech je životně důležité. Jeden z
        velkých milníků máš za sebou! Gratuluji! 🙂
      </p>
    </div>
  );
};

export default Lesson;
