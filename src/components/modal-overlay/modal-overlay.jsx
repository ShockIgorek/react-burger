import React from 'react';
import style from './modal-overlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = ({ handlePopupClose }) => <div onClick={handlePopupClose} className={style.overlay}>
</div>;

ModalOverlay.propTypes = {
  handlePopupClose: PropTypes.func.isRequired,
};

export default ModalOverlay