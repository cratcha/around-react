function Main() {
  return (
    <main>
      <section class="profile">
        <div class="profile__box">
          <div class="profile__avatar">
            <img
              src="<%= require('./images/profile-picture.jpg')%>"
              alt="Profile photo"
              class="profile__avatar-image"
            />
            <button
              class="profile__avatar-button"
              id="edit-avatar-button"
              type="button"
            ></button>
          </div>
          <div class="profile__info">
            <h1 class="profile__name" id="profile-name">
              Jacques Cousteau
            </h1>
            <p class="profile__occupation" id="profile-description">
              Explorer
            </p>
            <button
              class="profile__edit-button"
              id="open-modal-button"
              type="button"
            ></button>
          </div>
        </div>
        <button class="profile__add-button" type="button"></button>
      </section>
      <section class="elements"></section>
    </main>
  );
}
export default Main;
