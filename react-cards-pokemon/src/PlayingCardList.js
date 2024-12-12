import React from "react";
import { v1 as uuid } from "uuid";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./hooks/useAxios.js";

function CardTable() {
  const BASE_URL = "https://deckofcardsapi.com/api/deck/new/draw/";
  const [cards, addCard] = useAxios(BASE_URL);

  const handleAddCard = () => {
    addCard("", (res) => {
      const card = res.data.cards[0];
      return { ...card, id: uuid() }; // transform card data and add a unique ID
    });
  };

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={handleAddCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map((card) => (
          <PlayingCard key={card.id} front={card.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
