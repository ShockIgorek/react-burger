
import React from 'react';
import style from './popup.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function Popup() {
    return (
        <div className={style.popup}>
            <div className={style.modal}>
                <h3 className="text text_type_main-large">
                    Детали ингредиента
                </h3>
                <div className={style.btnExit}>
                    <CloseIcon type="primary" />
                </div>
            </div>
        </div>
    );
};