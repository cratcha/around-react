import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
      <button className="element__trash" type="button"></button>
      <img
        src={card.link}
        alt={card.name}
        className="element__photo"
        onClick={handleClick}
      />
      <div className="element__text-box">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-box">
          <button className="element__like-button" type="button"></button>
          <p className="element__like-button__counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
