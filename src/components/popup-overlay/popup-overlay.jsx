import React from 'react';
import style from './popup-overlay.module.css';
import { createPortal } from 'react-dom';

export default function PopupOverlay(props) {
    const modalRoot = document.getElementById("popups");
    return createPortal(
        <>
            <div className={style.overlay}>
                {props.children}
            </div>
        </>,
        modalRoot
    );
};
