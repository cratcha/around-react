import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
}) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getAppInfo()
      .then(([cardData, userData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__box">
          <div className="profile__avatar" onClick={onEditAvatarClick}>
            <img
              src={userAvatar}
              alt="Profile photo"
              className="profile__avatar-image"
            />
            <button className="profile__avatar-button" type="button"></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__occupation">{userDescription}</p>
            <button
              className="profile__edit-button"
              type="button"
              onClick={onEditProfileClick}
            ></button>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlaceClick}
        ></button>
      </section>
      <section>
        <ul className="elements">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}
export default Main;
