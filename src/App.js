import { useState } from "react";
import { CardGrid } from "./components/CardGrid";
import { Display } from "./components/Display";
import "./App.css";

function App() {
  const [cardIndex, setCardIndex] = useState(-1);
  const [cards, setCards] = useState(
    Array.from({ length: 11 }, () => Math.floor(Math.random() * 102) + 1)
  );

  const nextCard = () => {
    cardIndex < cards.length && setCardIndex(cardIndex + 1);
  };

  const reset = () => {
    setCardIndex(-1);
    setCards(
      Array.from({ length: 11 }, () => Math.floor(Math.random() * 102) + 1)
    );
  };

  return (
    <div className="App">
      <div className="header">
        <h2>Pokemon TCG 1st Edition</h2>
        <h3>Collect 'em all!</h3>
      </div>

      <Display
        cardSrc={`https://images.pokemontcg.io/base1/${cards[cardIndex]}.png`}
        nextCard={nextCard}
        cardIndex={cardIndex}
      />

      <CardGrid
        cardIndex={cardIndex}
        miniSrc={cards[0]}
        miniSrc2={cards[1]}
        miniSrc3={cards[2]}
        miniSrc4={cards[3]}
        miniSrc5={cards[4]}
        miniSrc6={cards[5]}
        miniSrc7={cards[6]}
        miniSrc8={cards[7]}
        miniSrc9={cards[8]}
        miniSrc10={cards[9]}
        miniSrc11={cards[10]}
      />
      <div style={{ position: "absolute" }}>
        <button onClick={reset}>
          New <br />
          Pack
        </button>
      </div>
    </div>
  );
}

export default App;
