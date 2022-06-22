import React from "react";
import imageSuccess from '../images/reg-success.svg';
import imageFail from '../images/reg-fail.svg';

function InfoTooltip({ isOpen, onClose, signupState }) {
  return (
    <section className={`popup popup_type_info-tooltip ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-btn"
          onClick={onClose}
          aria-label="Закрыть"
        />
        <img 
          className="popup__image-login"
          src={signupState ? imageSuccess : imageFail}
          alt="Статус регистрации"
        />
        <p className="popup__text-login">
          {signupState ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </p>
      </div>
    </section>
  )
}

export default InfoTooltip;
