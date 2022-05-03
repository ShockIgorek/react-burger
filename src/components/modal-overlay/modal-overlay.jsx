import React from 'react';
import style from './modal-overlay.module.css';
import PropTypes from 'prop-types';

export default function ModalOverlay({ popupCloseHandler }) {

  return (
    <div onClick={() => popupCloseHandler(false)} className={style.overlay}>
    </div>
  );
};

ModalOverlay.propTypes = {
  popupCloseHandler: PropTypes.func.isRequired,
};