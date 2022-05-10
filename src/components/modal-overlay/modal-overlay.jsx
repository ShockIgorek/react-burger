import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './modal-overlay.module.css';

export default function ModalOverlay() {
  const dispatch = useDispatch();
  const orderDetailsPopup = useSelector(state => state.popupState.orderDetailsPopup);

  const popupCloseHandler = () => {
    orderDetailsPopup ? dispatch({ type: 'CHANGE_ORDER_DETAILS_POPUP_STATE', payload: false }) : dispatch({ type: 'CHANGE_INGREDIENTS_POPUP_STATE', payload: false });
    orderDetailsPopup ? dispatch({ type: 'DELETE_ORDER_DATA' }) : dispatch({ type: 'DELETE_SELECTED_INGREDIENT' })
  }

  return (
    <div onClick={popupCloseHandler} className={style.overlay}>
    </div>
  );
};