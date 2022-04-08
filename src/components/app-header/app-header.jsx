import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css';
const temporaryLink = '#'

function AppHeader() {
    return (
        <header className={`${styles.appHeader} text text_type_main-default pt-4 pb-4`}>
            <nav className={styles.links_left}>
                <a className={`pt-5 pr-5 pb-5 ${styles.link}`} href={temporaryLink}>
                    <BurgerIcon type="secondary" />
                    <span className={`ml-2`}>Конструктор</span>
                </a>
                <a className={`p-5 ml-2 ${styles.link}`} href={temporaryLink}>
                    <ListIcon type="secondary" />
                    <span className={`ml-2`}>Лента заказов</span>
                </a>
            </nav>
            <a className={styles.logo} href={temporaryLink}>
                <Logo />
            </a>
            <a className={`p-5 ${styles.link} ${styles.account}`} href={temporaryLink}>
                <ProfileIcon type="secondary" />
                <span className={`ml-2`}>Личный кабинет</span>
            </a>
        </header >
    );
}


export default AppHeader;