import React from 'react';
import { useEffect } from 'react';
import style from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/modal-overlay';

const Modal = ({ handlePopupClose, children, title = '' }) => {
  const modalRoot = document.getElementById("modals");
  useEffect(() => {
    const handleEscapeClose = (evt) => {
      if (evt.key === 'Escape') {
        handlePopupClose()
      };
    };
    document.addEventListener('keyup', handleEscapeClose);
    return () => {
      document.removeEventListener('keyup', handleEscapeClose);
    };
  }, [handlePopupClose])


  return createPortal(
    <>
      <div className={`${style.container} pt-15 pr-10 pl-10 pb-15`}>
        <header className={style.header}>
          {title && (<h2 className={`${style.title} text text_type_main-large`}>{title}</h2>)}
          <button onClick={handlePopupClose} className={style.closeButton}>
            <CloseIcon type="primary" />
          </button>
        </header>
        {children}
      </div>
      <ModalOverlay handlePopupClose={handlePopupClose} />
    </>
    , modalRoot
  );
};

Modal.propTypes = {
  handlePopupClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

export default Modal;