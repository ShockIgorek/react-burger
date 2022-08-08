import { useState, useRef } from "react";
import style from "./reset-password.module.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {
    Input,
    Button,
    PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ResetPassword = ({ handlePasswordSave }) => {
    const [codeValue, setCodeValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const inputRef = useRef(null);

    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0);
    };

    const onPasswordChange = (e) => {
        setPasswordValue(e.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault()

        if (!passwordValue || !codeValue) {
            return;
        }
        handlePasswordSave({ passwordValue, codeValue })
    }

    return (
        <section className={style.window}>
            <form onSubmit={handleSubmit} className={style.form}>
                <p
                    className={`${style.title} text text_type_main-medium mb-6`}
                >
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
                        onChange={(e) => setCodeValue(e.target.value)}
                        value={codeValue}
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
                <Link className={style.link} to="/login">
                    Войти
                </Link>
            </p>
        </section>
    );
};

ResetPassword.propTypes = {
    handlePasswordSave: PropTypes.func.isRequired,
};

export default ResetPassword;