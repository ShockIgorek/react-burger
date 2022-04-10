import React from 'react';
import style from './popup-overlay.module.css';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export default function PopupOverlay({ children, popupCloseHandler }) {
  const modalRoot = document.getElementById("popups");

  return createPortal(
    <div onClick={() => popupCloseHandler(false)} className={style.overlay}>
      {children}
    </div>
    ,
    modalRoot
  );
};

PopupOverlay.propTypes = {
  children: PropTypes.element,
  popupCloseHandler: PropTypes.func,
}; 