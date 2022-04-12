import React from 'react';
import style from './modal.module.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { createPortal } from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';

export default function Modal({ children, modalCloseHandler, title = '' }) {
  const modalRoot = document.getElementById("modals");
  useEffect(() => {
    const handleEscapeClose = (evt) => {
      if (evt.key === 'Escape') {
        modalCloseHandler(false)
      };
    };

    document.addEventListener('keyup', handleEscapeClose);
    return () => {
      document.removeEventListener('keyup', handleEscapeClose);
    };
  }, [modalCloseHandler])

  return createPortal(
    <>
      <div className={`pt-15 pr-10 pl-10 pb-15 ${style.container}`}>
        <div className={style.header}>
          {title && (<h2 className={`${style.title} text text_type_main-large`}>{title}</h2>)}
          <button onClick={() => modalCloseHandler(false)} className={style.closeButton}>
            <CloseIcon type="primary" />
          </button>
        </div>
        {children}
      </div>
      <ModalOverlay modalCloseHandler={modalCloseHandler}/>
    </>
    , modalRoot
    );
  };

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  modalCloseHandler: PropTypes.func,
  title: PropTypes.string,
}; 