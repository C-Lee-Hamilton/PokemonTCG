import { useState } from "react";
import Slider from "./Slider";

export const Display = (props) => {
  const { cardIndex, nextCard, cardSrc } = props;

  return (
    <div>
      {cardIndex < 0 ? (
        <>
          <div onClick={nextCard} style={{ maxWidth: "150px" }}>
            <h4>Slide to Open</h4>
            <Slider />
          </div>
          <img
            className="viewer"
            style={{ float: "left" }}
            src="https://i.pinimg.com/736x/27/40/b1/2740b1875cc332ac702fb42cea612315--french-auction.jpg"
            alt="thiscard"
          />
        </>
      ) : (
        <img
          className="viewer"
          style={{ float: "left" }}
          onClick={nextCard}
          src={cardSrc}
          alt="thiscard"
        />
      )}
    </div>
  );
};
