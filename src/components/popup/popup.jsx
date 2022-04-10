import React from 'react';
import style from './popup.module.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function Popup({ children, popupCloseHandler, title = '' }) {

  useEffect(() => {
    const handleEscapeClose = (evt) => {
      if (evt.key === 'Escape') {
        popupCloseHandler(false)
      };
    };

    document.addEventListener('keyup', handleEscapeClose);
    return () => {
      document.removeEventListener('keyup', handleEscapeClose);
    };
  }, [popupCloseHandler])

  return (
    <div className={`pt-15 pr-10 pl-10 pb-15 ${style.container}`}>
      <header className={style.header}>
        {title && (<h2 className={`${style.title} text text_type_main-large`}>{title}</h2>)}
        <button onClick={() => popupCloseHandler(false)} className={style.closeButton}>
          <CloseIcon type="primary" />
        </button>
      </header>
      {children}
    </div>
  );
};

Popup.propTypes = {
  children: PropTypes.element,
  popupCloseHandler: PropTypes.func,
  title: PropTypes.string,
}; 