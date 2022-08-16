import style from './login.module.css';
import { useState, useRef } from 'react';
import { Link, useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import { Input, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { login } from "../../services/actions/user";
import { useDispatch, useSelector } from 'react-redux';


const Login = () => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const inputRef = useRef(null);

    const handleSubmit = (evt) => {
        evt.preventDefault()
        if (!emailValue || !passwordValue) {
            return;
        }
        dispatch(login(emailValue, passwordValue))
    };

    const dispatch = useDispatch();
    const history = useHistory();

    const onPasswordChange = (evt) => {
        setPasswordValue(evt.target.value);
    };

    return (
        <article className={style.window}>
            <form onSubmit={handleSubmit} className={style.form}>
                <h1 className={`text text_type_main-medium`}>
                    Вход
                </h1>
                <div className="mt-6 mb-6">
                    <Input
                        type={"text"}
                        placeholder={"E-mail"}
                        onChange={(evt) => setEmailValue(evt.target.value)}
                        value={emailValue}
                        name={"e-mail"}
                        error={false}
                        ref={inputRef}
                        errorText={"Ошибка"}
                        size={"default"}
                    />
                </div>
                <div className="mb-6">
                    <PasswordInput
                        onChange={onPasswordChange}
                        value={passwordValue}
                        name={"password"}
                    />
                </div>
                <Button type="primary" size="medium">
                    Войти
                </Button>
            </form>
            <p className="text text_type_main-default text_color_inactive">
                {"Вы — новый пользователь? "}
                <Link className={style.link} to="/register">
                    Зарегистрироваться
                </Link>
            </p>
            <p className="text text_type_main-default text_color_inactive mt-4">
                {"Забыли пароль? "}
                <Link className={style.link} to="/forgot-password">
                    Восстановить пароль
                </Link>
            </p>
        </article>
    );
};



export default Login; 