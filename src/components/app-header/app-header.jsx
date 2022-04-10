import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import style from './app-header.module.css';

function AppHeader() {
    return (
        <header className={`${style.appHeader} text text_type_main-default pt-4 pb-4`}>
            <nav>
                <ul className={style.links}>
                    <li>
                        <NavLink className={`pt-5 pr-5 pb-5 ${style.link_active} ${style.link}`} to="/">
                            <BurgerIcon type="primary" />
                            <span className={`ml-2`}>Конструктор</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={`p-5 ${style.link}`} to="/">
                            <ListIcon type="secondary" />
                            <span className={`ml-2`}>Лента заказов</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={style.logo}>
                <Logo />
            </div>
            <Link className={`p-5 ${style.link} ${style.profile}`} to="/">
                <ProfileIcon type="secondary" />
                <span className={`ml-2`}>Личный кабинет</span>
            </Link>
        </header >
    );
}

export default AppHeader;