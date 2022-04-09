
import React from 'react';
import style from '../popup.module.css';
// import doneGif from '../../images/done.gif';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function Content(props) {
    return (
        <div className={`pt-15 pr-10 pl-10 pb-30 ${style.container}`}>
            <div className={style.modal}>
                <div className={style.closeButton}>
                    <CloseIcon type="primary" />
                </div>
            </div>
            {props.data && <div>
                <img width="480" height="240" src={props.data && props.data.image} />
                <p className="text text_type_main-medium pt-4 pb-8">{props.data && props.data.name}</p>
                <ul className={`${style.list} pt-8`}>
                    <li className={`${style.listItem} text text_type_main-default text_color_inactive`}>
                        <span>
                            Калории,ккал
                        </span>
                        {props.data.calories}
                    </li>
                    <li className={`${style.listItem} text text_type_main-default text_color_inactive`}>
                        <span>
                            Белки, г
                        </span>
                        {props.data.proteins}
                    </li>
                    <li className={`${style.listItem} text text_type_main-default text_color_inactive`}>
                        <span>
                            Жиры, г
                        </span>
                        {props.data.fat}
                    </li>
                    <li className={`${style.listItem} text text_type_main-default text_color_inactive`}>
                        <span>
                            Углеводы, г
                        </span>
                        {props.data.carbohydrates}
                    </li>
                </ul>
            </div>}
        </div>
    );
};