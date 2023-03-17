import "../App.css";
import useState from "react";

export const CardGrid = (props) => {
  const { cards, cardIndex, setSauce } = props;

  return (
    <div style={{ textAlign: "center" }}>
      <div className="cardbox">
        {cards.map((card, index) => (
          <>
            <img
              onClick={() => {
                setSauce(card);
              }}
              className="tiny"
              src={`https://images.pokemontcg.io/base1/${
                index < cardIndex ? card : 0
              }.png`}
              style={index + 1 === cards.length ? { marginLeft: "33%" } : {}}
              alt="thiscard"
            />
            {(index + 1) % 3 === 0 && <br />}
          </>
        ))}
      </div>
    </div>
  );
};
