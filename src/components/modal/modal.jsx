import React from 'react';
import style from './modal.module.css';
import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { createPortal } from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { useDispatch, useSelector } from 'react-redux';

export default function Modal({ children, title = '' }) {
  const modalRoot = document.getElementById("modals");
  const dispatch = useDispatch();
  const orderDetailsPopup = useSelector(state => state.popupState.orderDetailsPopup);

  useEffect(() => {
    const handleEscapeClose = (evt) => {
      if (evt.key === 'Escape') {
        orderDetailsPopup ? dispatch({ type: 'CHANGE_ORDER_DETAILS_POPUP_STATE', payload: false }) : dispatch({ type: 'CHANGE_INGREDIENTS_POPUP_STATE', payload: false });
      };
    };

    document.addEventListener('keyup', handleEscapeClose);
    return () => {
      document.removeEventListener('keyup', handleEscapeClose);
    };
  }, [dispatch, orderDetailsPopup]);

  const modalCloseHandler = () => {
    orderDetailsPopup ? dispatch({ type: 'CHANGE_ORDER_DETAILS_POPUP_STATE', payload: false }) : dispatch({ type: 'CHANGE_INGREDIENTS_POPUP_STATE', payload: false });
  }

  return createPortal(
    <>
      <div className={`${style.container} pt-15 pr-10 pl-10 pb-15`}>
        <header className={style.header}>
          {title && (<h2 className={`${style.title} text text_type_main-large`}>{title}</h2>)}
          <button onClick={modalCloseHandler} className={style.closeButton}>
            <CloseIcon type="primary" />
          </button>
        </header>
        {children}
      </div>
      <ModalOverlay/>
    </>
    , modalRoot
  );
};

// Modal.propTypes = {
//   children: PropTypes.element.isRequired,
//   modalCloseHandler: PropTypes.func.isRequired,
//   title: PropTypes.string,
// };