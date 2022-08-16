import { useState, useRef } from "react";
import style from "./profile.module.css";
import { Link, NavLink } from "react-router-dom";
import {
    Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

const Profile = () => {
    const [nameValue, setNameValue] = useState('');
    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const inputRef = useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
    }

    return (
        <section className={style.window}>
            <nav className={style.navigation}>
                <ul className={`${style.list}`}>
                    <li className={style.list_item}>
                        <NavLink activeClassName={style.link_active} className={`${style.link} text text_type_main-medium`} exact to="/profile">Профиль</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={style.link_active} className={`${style.link} text text_type_main-medium`} exact to="/profile/orders">История заказов</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={style.link_active} className={`${style.link} text text_type_main-medium`} exact to="/">Выход</NavLink>
                    </li>
                </ul>
                <p className={`${style.text} text text_type_main-default text_color_inactive`}>В этом разделе вы можете изменить свои персональные данные</p>
            </nav>
            <form className={style.form}>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={evt => setNameValue(evt.target.value)}
                    icon={'EditIcon'}
                    value={nameValue}
                    name={'name'}
                    error={false}
                    ref={inputRef}
                    onIconClick={onIconClick}
                    errorText={'Ошибка'}
                    size={'default'}
                />
                <Input
                    type={'text'}
                    placeholder={'Логин'}
                    onChange={evt => setLoginValue(evt.target.value)}
                    icon={'EditIcon'}
                    value={loginValue}
                    name={'name'}
                    error={false}
                    ref={inputRef}
                    onIconClick={onIconClick}
                    errorText={'Ошибка'}
                    size={'default'}
                />
                <Input
                    type={'text'}
                    placeholder={'Пароль'}
                    onChange={evt => setPasswordValue(evt.target.value)}
                    icon={'EditIcon'}
                    value={passwordValue}
                    name={'name'}
                    error={false}
                    ref={inputRef}
                    onIconClick={onIconClick}
                    errorText={'Ошибка'}
                    size={'default'}
                />
            </form>
        </section>
    );
};

export default Profile;
