import React from 'react';
import style from './app-header.module.css';
import { NavLink, Link } from 'react-router-dom';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from "react-redux";

const AppHeader = () => {
    const userData = useSelector((state) => state.userData.userData);

    return (
        <header className={`${style.header} text text_type_main-default pt-4 pb-4`}>
            <div className={style.links}>
                <nav>
                    <ul className={style.links}>
                        <li>
                            <NavLink activeClassName={style.link_active} className={`pt-5 pr-5 pb-5 ${style.link}`} to="/">
                                <BurgerIcon type="primary" />
                                <span className={`ml-2`}>Конструктор</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={style.link_active} className={`p-5 ${style.link}`} to="/orders">
                                <ListIcon type="secondary" />
                                <span className={`ml-2`}>Лента заказов</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={style.logo}>
                    <Logo />
                </div>
                {
                    userData ? (<NavLink activeClassName={style.link_active} className={`p-5 ${style.link} ${style.profile}`} to="/profile">
                        <ProfileIcon type="secondary" />
                        <span className={`ml-2`}>Личный кабинет</span>
                    </NavLink>) : (<NavLink activeClassName={style.link_active} className={`p-5 ${style.link} ${style.profile}`} to="/login">
                        <ProfileIcon type="secondary" />
                        <span className={`ml-2`}>Войти</span>
                    </NavLink>)
                }
            </div>
        </header >
    );
}

export default AppHeader

