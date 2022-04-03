import React from 'react';
import styles from './app-header.module.css';
console.log(styles)




export default AppHeader;
function AppHeader() {
    return <header className={styles.appHeader}>
        <ul className={styles.links}>
            <li>
                <a>
                    Конструктор
                </a>
            </li>
            <li>
                <a>
                    Лента заказов
                </a>
            </li>
            <li>
                <a>
                    logo
                </a>
            </li>
            <li>
                <a>
                    Личный кабинет
                </a>
            </li>
        </ul>
    </header>
}