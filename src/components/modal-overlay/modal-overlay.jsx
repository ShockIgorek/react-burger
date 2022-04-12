import React from 'react';
import style from './modal-overlay.module.css';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export default function ModalOverlay({ children, modalCloseHandler }) {
  const modalRoot = document.getElementById("popups");

  return createPortal(
    <div onClick={() => modalCloseHandler(false)} className={style.overlay}>
      {children}
    </div>
    ,
    modalRoot
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.element,
  modalCloseHandler: PropTypes.func,
}; 