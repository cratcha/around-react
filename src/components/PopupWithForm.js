import React from "react";

function PopupWithForm({
  title,
  name,
  onClose,
  children,
  buttonText = "Save",
  isOpen,
}) {
  return (
    <div className={`modal modal_type_${name} ${isOpen ? "modal_open" : ""}`}>
      <div className="modal__content">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <h2 class="modal__title">{title}</h2>
        <form className="modal__form" name={name}>
          {children}
          <button type="submit" className="modal__submit-button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
