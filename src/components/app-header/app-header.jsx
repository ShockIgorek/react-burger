import React from 'react';
import style from './app-header.module.css';
import { NavLink, Link } from 'react-router-dom';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
export default function AppHeader() {
    return (
        <header className={`${style.header} text text_type_main-default pt-4 pb-4`}>
            <nav>
                <ul className={style.links}>
                    <li>
                        <NavLink className={`pt-5 pr-5 pb-5 ${style.link}`} to="/" activeClassName={style.link_active}>
                            <BurgerIcon type="secondary" />
                            <span className={`ml-2`}>
                                Конструктор
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={`p-5 ${style.link}`} to="/" activeClassName={style.link_active}>
                            <ListIcon type="secondary" />
                            <span className={`ml-2`}>
                                Лента заказов
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={style.logo}>
                <Logo />
            </div>
            <NavLink className={`p-5 ${style.link} ${style.profile}`} to="/profile" activeClassName={style.link_active}>
                <ProfileIcon type="secondary" />
                <span className={`ml-2`}>
                    Личный кабинет
                </span>
            </NavLink>
        </header >
    );
}

