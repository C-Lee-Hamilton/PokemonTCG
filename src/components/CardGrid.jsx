import "../App.css";

export const CardGrid = (props) => {
  const {
    miniSrc,
    miniSrc2,
    miniSrc3,
    miniSrc4,
    miniSrc5,
    miniSrc6,
    miniSrc7,
    miniSrc8,
    miniSrc9,
    miniSrc10,
    miniSrc11,
    cardIndex,
  } = props;

  return (
    <div style={{ textAlign: "center" }}>
      <div className="cardbox">
        {cardIndex > 0 ? (
          <img
            className="tiny"
            src={`https://images.pokemontcg.io/base1/${miniSrc}.png`}
            alt="thiscard"
          />
        ) : (
          <img
            className="tiny"
            src={`https://images.pokemontcg.io/base1/0.png`}
            alt="thiscard"
          />
        )}
        {cardIndex > 1 ? (
          <img
            className="tiny"
            src={`https://images.pokemontcg.io/base1/${miniSrc2}.png`}
            alt="thiscard"
          />
        ) : (
          <img
            className="tiny"
            src={`https://images.pokemontcg.io/base1/0.png`}
            alt="thiscard"
          />
        )}

        {cardIndex > 2 ? (
          <img
            className="tiny"
            src={`https://images.pokemontcg.io/base1/${miniSrc3}.png`}
            alt="thiscard"
          />
        ) : (
          <img
            className="tiny"
            src={`https://images.pokemontcg.io/base1/0.png`}
            alt="thiscard"
          />
        )}
        <br />
        {cardIndex > 3 ? (
          <img
            className="tiny"
            src={`https://images.pokemontcg.io/base1/${miniSrc4}.png`}
            alt="thiscard"
          />
        ) : (
          <img
            className="tiny"
            src={`https://images.pokemontcg.io/base1/0.png`}
            alt="thiscard"
          />
        )}
        {cardIndex > 4 ? (
          <img
            className="tiny"
            src={`https://images.pokemontcg.io/base1/${miniSrc5}.png`}
            alt="thiscard"
          />
        ) : (
          <img
            className="tiny"
            src={`https://images.pokemontcg.io/base1/0.png`}
            alt="thiscard"
          />
        )}
        {cardIndex > 5 ? (
          <img
            className="tiny"
            src={`https://images.pokemontcg.io/base1/${miniSrc6}.png`}
            alt="thiscard"
          />
        ) : (
          <img
            className="tiny"
            src={`https://images.pokemontcg.io/base1/0.png`}
            alt="thiscard"
          />
        )}
        <br />
        {cardIndex > 6 ? (
          <img
            className="tiny"
            src={`https://images.pokemontcg.io/base1/${miniSrc7}.png`}
            alt="thiscard"
          />
        ) : (
          <img
            className="tiny"
            src={`https://images.pokemontcg.io/base1/0.png`}
            alt="thiscard"
          />
        )}
        {cardIndex > 7 ? (
          <img
            className="tiny"
            src={`https://images.pokemontcg.io/base1/${miniSrc8}.png`}
            alt="thiscard"
          />
        ) : (
          <img
            className="tiny"
            src={`https://images.pokemontcg.io/base1/0.png`}
            alt="thiscard"
          />
        )}
        {cardIndex > 8 ? (
          <img
            className="tiny"
            src={`https://images.pokemontcg.io/base1/${miniSrc9}.png`}
            alt="thiscard"
          />
        ) : (
          <img
            className="tiny"
            src={`https://images.pokemontcg.io/base1/0.png`}
            alt="thiscard"
          />
        )}
        <br />
        {cardIndex > 9 ? (
          <img
            className="tiny"
            src={`https://images.pokemontcg.io/base1/${miniSrc10}.png`}
            alt="thiscard"
          />
        ) : (
          <img
            className="tiny"
            src={`https://images.pokemontcg.io/base1/0.png`}
            alt="thiscard"
          />
        )}
        {cardIndex > 10 ? (
          <img
            style={{ marginLeft: "33%" }}
            className="tiny"
            src={`https://images.pokemontcg.io/base1/${miniSrc11}.png`}
            alt="thiscard"
          />
        ) : (
          <img
            style={{ marginLeft: "33%" }}
            className="tiny"
            src={`https://images.pokemontcg.io/base1/0.png`}
            alt="thiscard"
          />
        )}
      </div>
    </div>
  );
};
