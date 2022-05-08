import React from 'react';
import style from './modal-overlay.module.css';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

export default function ModalOverlay() {
  const dispatch = useDispatch();
  const orderDetailsPopup = useSelector(state => state.popupState.orderDetailsPopup);

  const overlayClickHandler = () => {
    orderDetailsPopup ? dispatch({ type: 'CHANGE_ORDER_DETAILS_POPUP_STATE', payload: false }) : dispatch({ type: 'CHANGE_INGREDIENTS_POPUP_STATE', payload: false });
  }
  return (
    <div onClick={overlayClickHandler} className={style.overlay}>
    </div>
  );
};

// ModalOverlay.propTypes = {
//   popupCloseHandler: PropTypes.func.isRequired,
// };