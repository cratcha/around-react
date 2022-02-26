import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <body class="page">
        <Header />
        <Main />
        <Footer />
        <div class="modal modal_type_avatar" id="change-avatar-modal">
          <div class="modal__content">
            <button
              class="modal__close-button"
              id="avatar-close-button"
              type="button"
            ></button>
            <h2 class="modal__title">Change profile picture</h2>
            <form
              class="modal__form"
              name="modal-avatar"
              id="change-avatar-form"
            >
              <input
                class="modal__input"
                name="link"
                placeholder="Image link"
                id="avatar"
                type="url"
                required
              />
              <span class="modal__error-text" id="avatar-error">
                Please enter a web address
              </span>
              <button disabled type="submit" class="modal__submit-button">
                Save
              </button>
            </form>
          </div>
        </div>
        <div class="modal" id="edit-profile-modal">
          <div class="modal__content">
            <button
              class="modal__close-button"
              id="edit-close-button"
              type="button"
            ></button>
            <h2 class="modal__title">Edit Profile</h2>
            <form
              class="modal__form"
              name="edit-profile"
              id="edit-profile-form"
            >
              <input
                class="modal__input"
                name="name"
                placeholder="Name"
                id="name"
                minlength="2"
                maxlength="40"
                required
              />
              <span class="modal__error-text" id="name-error">
                Please fill out this field.
              </span>
              <input
                class="modal__input"
                name="about"
                placeholder="About me"
                id="description"
                minlength="2"
                maxlength="200"
                required
              />
              <span class="modal__error-text" id="description-error">
                Please fill out this field.
              </span>
              <button disabled type="submit" class="modal__submit-button">
                Save
              </button>
            </form>
          </div>
        </div>
        <div class="modal" id="add-card-modal">
          <div class="modal__content">
            <button class="modal__close-button" type="button"></button>
            <h2 class="modal__title">New place</h2>
            <form class="modal__form" name="add-card" id="add-card-form">
              <input
                class="modal__input"
                name="name"
                placeholder="name"
                id="title"
                type="text"
                required
                minlength="1"
                maxlength="30"
              />
              <span class="modal__error-text" id="title-error">
                Please fill out this field.
              </span>
              <input
                class="modal__input"
                name="link"
                placeholder="Image link"
                id="link"
                type="url"
                required
              />
              <span class="modal__error-text" id="link-error">
                Please enter a web address
              </span>
              <button disabled type="submit" class="modal__submit-button">
                Create
              </button>
            </form>
          </div>
        </div>
        <div class="modal" id="image-modal">
          <div class="modal__content modal__content_type_image">
            <button class="modal__close-button" type="button"></button>
            <img class="modal__image" src=" " alt=" " />
            <p class="modal__caption"></p>
          </div>
        </div>
        <div class="modal modal_type_trash" id="delete-popup">
          <div class="modal__content">
            <button class="modal__close-button" type="button"></button>
            <h2 class="modal__title">Are you sure?</h2>
            <button type="button" class="modal__delete-button">
              Yes
            </button>
          </div>
        </div>
        <template id="element-template">
          <article class="element">
            <button class="element__trash" type="button"></button>
            <img src=" " alt=" " class="element__photo" />
            <div class="element__text-box">
              <h2 class="element__title"></h2>
              <div class="element__like-box">
                <button class="element__like-button" type="button"></button>
                <p class="element__like-button__counter"></p>
              </div>
            </div>
          </article>
        </template>
      </body>
    </div>
  );
}

export default App;
