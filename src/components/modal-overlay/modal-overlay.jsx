import React from 'react';
import style from './modal-overlay.module.css';
import PropTypes from 'prop-types';

export default function ModalOverlay({ modalCloseHandler }) {
  // const modalRoot = document.getElementById("popups");

  return(
    <div onClick={() => modalCloseHandler(false)} className={style.overlay}>
    </div>
    // ,
    // modalRoot
  );
};

ModalOverlay.propTypes = {
  modalCloseHandler: PropTypes.func,
}; 