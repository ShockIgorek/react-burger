import { useState, useRef, useEffect } from "react";
import style from "./profile.module.css";
import { Link, NavLink } from "react-router-dom";
import {
    Input, Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, sendUserData, logout } from "../../services/actions/user";

const Profile = () => {
    const [nameValue, setNameValue] = useState("");
    const [loginValue, setLoginValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const userData = useSelector((state) => state.userData.userData);
    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.userData.accessToken);

    const onNameClick = () => nameInputRef.current.focus();

    const oтEmailClick = () => emailInputRef.current.focus();

    const onPasswordClick = () => passwordInputRef.current.focus();

    const onSubmit = (evt) => {
        evt.preventDefault();
        dispatch(sendUserData(accessToken, nameValue, loginValue, passwordValue))
    }

    const onCancelEditing = (evt) => {
        evt.preventDefault();
        setNameValue(userData.name)
        setLoginValue(userData.email)
        setPasswordValue('')
    }
    useEffect(() => {
        if (!userData) {
            dispatch(getUserData(accessToken));
        }

        if (userData) {
            setLoginValue(userData.email);
            setNameValue(userData.name);
        }
    }, [accessToken, dispatch, userData]);

    const handleLogout = () => {
        const refreshToken = localStorage.getItem('refreshToken');
        dispatch(logout(refreshToken))
    }


    return (
        <section className={style.window}>
            <nav className={style.navigation}>
                <ul className={`${style.list}`}>
                    <li className={style.list_item}>
                        <NavLink
                            activeClassName={style.link_active}
                            className={`${style.link} text text_type_main-medium`}
                            exact
                            to="/profile">
                            Профиль
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            activeClassName={style.link_active}
                            className={`${style.link} text text_type_main-medium`}
                            exact
                            to="/profile/orders">
                            История заказов
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            activeClassName={style.link_active}
                            className={`${style.link} text text_type_main-medium`}
                            exact
                            to="/"
                            onClick={handleLogout}>
                            Выход
                        </NavLink>
                    </li>
                </ul>
                <p
                    className={`${style.text} text text_type_main-default text_color_inactive`}>
                    В этом разделе вы можете изменить свои персональные данные
                </p>
            </nav>
            <form className={style.form} onSubmit={onSubmit} >
                <Input
                    type={"text"}
                    placeholder={"Имя"}
                    onChange={(evt) => setNameValue(evt.target.value)}
                    icon={"EditIcon"}
                    value={nameValue}
                    name={"name"}
                    error={false}
                    ref={nameInputRef}
                    onIconClick={onNameClick}
                    errorText={"Ошибка"}
                    size={"default"}
                />
                <Input
                    type={"text"}
                    placeholder={"Логин"}
                    onChange={(evt) => setLoginValue(evt.target.value)}
                    icon={"EditIcon"}
                    value={loginValue}
                    name={"name"}
                    error={false}
                    ref={emailInputRef}
                    onIconClick={oтEmailClick}
                    errorText={"Ошибка"}
                    size={"default"}
                />
                <Input
                    type={"text"}
                    placeholder={"Пароль"}
                    onChange={(evt) => setPasswordValue(evt.target.value)}
                    icon={"EditIcon"}
                    value={passwordValue}
                    name={"name"}
                    error={false}
                    ref={passwordInputRef}
                    onIconClick={onPasswordClick}
                    errorText={"Ошибка"}
                    size={"default"}
                />
                <div className={style.button}>
                    <Button onClick={onCancelEditing} type="secondary" size="medium">
                        Отмена
                    </Button>
                    <Button type="primary" size="medium">
                        Сохранить
                    </Button>
                </div>
            </form>
        </section>
    );
};

export default Profile;
