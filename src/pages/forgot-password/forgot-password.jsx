
import { useState, useRef } from "react";
import PropTypes from 'prop-types';
import style from "./forgot-password.module.css";
import { Link, useHistory } from "react-router-dom";
import {
    Input,
    Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { forgotPassword } from "../../services/actions/user";
import { useDispatch, useSelector } from 'react-redux';

const ForgotPassword = () => {
    const [emailValue, setEmailValue] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const handleSubmit = (evt) => {
        evt.preventDefault()
        if (!emailValue) {
            return;
        }

        dispatch(forgotPassword(emailValue));
        setEmailValue("");

    };

    return (
        <section className={style.window}>
            <form onSubmit={handleSubmit} className={style.form}>
                <p
                    className={`${style.title} text text_type_main-medium mb-6`}
                >
                    Восстановление пароля
                </p>
                <div className="mb-6">
                    <Input
                        type={"text"}
                        placeholder={"Укажите e-mail"}
                        onChange={(evt) => setEmailValue(evt.target.value)}
                        value={emailValue}
                        name={"e-mail"}
                        error={false}
                        ref={inputRef}
                        errorText={"Ошибка"}
                        size={"default"}
                    />
                </div>
                <Button type="primary" size="medium">
                    Восстановить
                </Button>
            </form>
            <p className="text text_type_main-default text_color_inactive">
                {"Вспомнили пароль? "}
                <Link className={style.link} to="/login">
                    Войти
                </Link>
            </p>
        </section>
    );
};


export default ForgotPassword;