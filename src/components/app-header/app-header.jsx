import React from 'react';
import style from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
export default function AppHeader() {
    return (
        <header className={`${style.header} text text_type_main-default pt-4 pb-4`}>
            <nav>
                <ul className={style.links}>
                    <li>
                        <a className={`pt-5 pr-5 pb-5 ${style.link}`} to="/">
                            <BurgerIcon type="secondary" />
                            <span className={`ml-2`}>
                                Конструктор
                            </span>
                        </a>
                    </li>
                    <li>
                        <a className={`p-5 ${style.link}`} to="/">
                            <ListIcon type="secondary" />
                            <span className={`ml-2`}>
                                Лента заказов
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className={style.logo}>
                <Logo />
            </div>
            <a className={`p-5 ${style.link} ${style.profile}`} to="/profile">
                <ProfileIcon type="secondary" />
                <span className={`ml-2`}>
                    Личный кабинет
                </span>
            </a>
        </header >
    );
}

