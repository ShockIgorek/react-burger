import { useState, useRef } from "react";
import style from "./reset-password.module.css";
import { Link } from "react-router-dom";
import {
    Input,
    Button,
    PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ResetPassword = () => {
    const [value, setValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const inputRef = useRef(null);

    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0);
        alert("Icon Click Callback");
    };

    const onPasswordChange = (evt) => {
        setPasswordValue(evt.target.value);
    };

    return (
        <article className={style.window}>
            <form className={style.form}>
                <p className={`${style.title} text text_type_main-medium mb-6`}>
                    Восстановление пароля
                </p>
                <PasswordInput
                    onChange={onPasswordChange}
                    value={passwordValue}
                    name={"password"}
                    placeholder={"Введите новый пароль"}
                />
                <div className="mb-6 mt-6">
                    <Input
                        type={"text"}
                        placeholder={"Введите код из письма"}
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        name={"e-mail"}
                        error={false}
                        ref={inputRef}
                        onIconClick={onIconClick}
                        errorText={"Ошибка"}
                        size={"default"}
                    />
                </div>
                <Button type="primary" size="medium">
                    Сохранить
                </Button>
            </form>
            <p className="text text_type_main-default text_color_inactive">
                {"Вспомнили пароль? "}
                <Link className={style.link} to="/">
                    Войти
                </Link>
            </p>
        </article>
    );
};

export default ResetPassword;