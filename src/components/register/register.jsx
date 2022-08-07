import { useState, useRef } from "react";
import style from "./register.module.css";
import { Link } from "react-router-dom";
import {
    Input,
    Button,
    PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

const Register = () => {
    const [value, setValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const inputRef = useRef(null);

    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0);
        console.log("click");
    };

    const onPasswordChange = (evt) => {
        setPasswordValue(evt.target.value);
    };

    return (
        <article className={style.window}>
            <form className={style.form}>
                <p className={`${style.title} text text_type_main-medium`}>
                    Регистрация
                </p>
                <div className="mt-6 mb-6">
                    <Input
                        type={"text"}
                        placeholder={"Имя"}
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        name={"name"}
                        error={false}
                        ref={inputRef}
                        onIconClick={onIconClick}
                        errorText={"Ошибка"}
                        size={"default"}
                    />
                </div>
                <div className="mb-6">
                    <Input
                        type={"text"}
                        placeholder={"E-mail"}
                        onChange={(evt) => setValue(evt.target.value)}
                        value={value}
                        name={"e-mail"}
                        error={false}
                        ref={inputRef}
                        onIconClick={onIconClick}
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
                    Зарегистрироваться
                </Button>
            </form>
            <p className="text text_type_main-default text_color_inactive">
                {"Уже зарегистрированы? "}
                <Link className={style.link} to="/login">
                    Войти
                </Link>
            </p>
        </article>
    );
};

export default Register;