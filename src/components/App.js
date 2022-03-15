import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  const [currentUser, setCurrentUser] = React.useState([]);

  React.useEffect(() => {
    api
      .getAppInfo()
      .then(([cardData, userData]) => {
        setCurrentUser(userData);
        setCards(cardData);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Send a request to the API and getting the updated card data
    api
      .changeLikeStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateUser({ name, about }) {
    api
      .editUserInfo({ name, about })
      .then((newUserData) => {
        setCurrentUser(newUserData);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="page">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <PopupWithForm
          title="New Place"
          name="new-card"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label>
            <input
              className="modal__input"
              name="name"
              placeholder="name"
              id="title"
              type="text"
              required
              minLength="1"
              maxLength="30"
            />
            <span className="modal__error-text" id="title-error">
              Please fill out this field.
            </span>
            <input
              className="modal__input"
              name="link"
              placeholder="Image link"
              id="link"
              type="url"
              required
            />
            <span className="modal__error-text" id="link-error">
              Please enter a web address
            </span>
          </label>
        </PopupWithForm>

        <PopupWithForm
          title="New Place"
          name="new-card"
          buttonText="Create"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label>
            <input
              className="modal__input"
              name="name"
              placeholder="name"
              id="title"
              type="text"
              required
              minLength="1"
              maxLength="30"
            />
            <span className="modal__error-text" id="title-error">
              Please fill out this field.
            </span>
            <input
              className="modal__input"
              name="link"
              placeholder="Image link"
              id="link"
              type="url"
              required
            />
            <span className="modal__error-text" id="link-error">
              Please enter a web address
            </span>
          </label>
        </PopupWithForm>

        <PopupWithForm
          title="Change Profile Picture"
          name="edit-avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label>
            <input
              className="modal__input"
              name="link"
              placeholder="Image link"
              id="avatar"
              type="url"
              required
            />
            <span className="modal__error-text" id="avatar-error">
              Please enter a web address
            </span>
          </label>
        </PopupWithForm>

        <PopupWithForm
          title="Are you sure?"
          name="remove-card"
          buttonText="Yes"
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
