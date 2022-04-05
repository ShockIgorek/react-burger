import React from 'react';
import styles from './app-header.module.css';
import {
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components'
const temporaryLink = '#'

export default AppHeader;
function AppHeader() {
    return <header className={styles.appHeader}>
        <nav className={styles.appHeader__links}>
            <a className={`text text_type_main-default ${styles.appHeader__link}`} href={temporaryLink}>
                <BurgerIcon />
                Конструктор
            </a>
            <a className={`text text_type_main-default ${styles.appHeader__link}`} href={temporaryLink}>
                <ListIcon />
                Лента заказов
            </a>
            <a className={styles.appHeader__logo} href={temporaryLink}>
                <Logo />
            </a>
            <a className={`text text_type_main-default ${styles.appHeader__link} ${styles.appHeader__profile}`} href={temporaryLink}>
                <ProfileIcon />
                Личный кабинет
            </a>
        </nav>
    </header >
}