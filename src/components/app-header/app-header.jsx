import React from 'react';
import styles from './app-header.module.css';
import {Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components'
const temporaryLink = '#'

console.log(styles);
console.log(ListIcon)
export default AppHeader;
function AppHeader() {
    return <header className={styles.appHeader}>
        <nav className={styles.appHeader__links}>
            <a className={`pl-4 pr-4 pb-4 pt-4`}href={temporaryLink}><BurgerIcon className={'mr-2'}/>Конструктор</a>
            <a className={`pl-4`}href={temporaryLink}><ListIcon className={'mr-2'}/>Лента заказов</a>
            <a className={styles.appHeader__logo} href={temporaryLink}><Logo /></a>
            <a href={temporaryLink}><ProfileIcon className={'mr-2'} />Личный кабинет</a>
        </nav>
    </header >
}