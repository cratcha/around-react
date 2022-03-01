import React from "react";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
}) {
  return (
    <main>
      <section className="profile">
        <div className="profile__box">
          <div className="profile__avatar" onClick={onEditAvatarClick}>
            <img src="" alt="Profile photo" className="profile__avatar-image" />
            <button className="profile__avatar-button" type="button"></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name"></h1>
            <p className="profile__occupation"></p>
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
      <section className="elements"></section>
    </main>
  );
}
export default Main;
