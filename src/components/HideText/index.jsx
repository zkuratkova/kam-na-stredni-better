import React, { useState } from 'react';

const HideText = () => {
  const [hidden, setHidden] = useState(true);

  const HandleClick = () => setHidden(!hidden);

  return (
    <>
      <p
        className={
          hidden ? 'contact__text contact__text--hidden' : 'contact__text'
        }
      >
        Miluje příběhy, a díky tomu vystudoval filmovou školu. Schopnost
        vyprávění maximálně zúročuje hlavně při přípravě her a audio příběhů.
        Zajímá se o propojování lidí. Uvědomil si, v čem spočívá význam slova
        spolupráce a těší se z pokroků, které se díky tomu dějí. Velkou radost
        mu dělá podporující manželka a dvě krásné dcerky.
      </p>
      {hidden ? (
        <button onClick={HandleClick} className="btn--hide">
          Více
        </button>
      ) : (
        <button onClick={HandleClick} className="btn--hide">
          Méně
        </button>
      )}
    </>
  );
};

export default HideText;
