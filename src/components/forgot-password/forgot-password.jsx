
import { useState, useRef } from "react";
import style from "./forgot-password.module.css";
import { Link } from "react-router-dom";
import {
    Input,
    Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ForgotPassword = () => {
    const [value, setValue] = useState("");
    // const [passwordValue, setPasswordValue] = useState("");
    const inputRef = useRef(null);

    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0);
        alert("Icon Click Callback");
    };


    return (
        <section className={style.window}>
            <form className={style.form}>
                <p className={`${style.title} text text_type_main-medium mb-6`}>
                    Восстановление пароля
                </p>
                <div className="mb-6">
                    <Input
                        type={"text"}
                        placeholder={"Укажите e-mail"}
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
                    Восстановить
                </Button>
            </form>
            <p className="text text_type_main-default text_color_inactive">
                {"Вспомнили пароль? "}
                <Link className={style.link} to="/">
                    Войти
                </Link>
            </p>
        </section>
    );
};

export default ForgotPassword;