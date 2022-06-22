//объект конфигураций валидации
export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_disabled'
}

export const popupFormName = document.querySelector('#name-input');
export const popupFormJob = document.querySelector('#job-input');
export const popupTypeEdit = document.querySelector('.popup_type_edit');
export const popupTypeCard = document.querySelector('.popup_type_card');
export const formProfile = popupTypeEdit.querySelector('.popup__form');
export const formCard = popupTypeCard.querySelector('.popup__form');
export const buttonAddCard = document.querySelector('.profile__add-button');
export const cardsList = document.querySelector('.elements__list');
export const popupTypeImage = document.querySelector('.popup_type_image');
export const popupTypeConfirm = document.querySelector('.popup_type_confirm');
export const nameInput = document.querySelector('.profile__title');
export const jobInput = document.querySelector('.profile__subtitle');
export const buttonEditForm = document.querySelector('.profile__edit-button');
export const buttonDeleteCard = document.querySelector('.element__delete-button');

// avatar
export const profileAvatar = document.querySelector('.profile__avatar');
export const popupTypeAvatar = document.querySelector('.popup_type_edit-avatar');
export const buttonEditAvatar = document.querySelector('.profile__avatar-edit');
export const formAvatar = popupTypeAvatar.querySelector('.popup__form');
export const avatarInputUrl = popupTypeAvatar.querySelector('.popup__input_avatar-url');