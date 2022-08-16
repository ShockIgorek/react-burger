import { useState, useRef } from "react";
import style from "./reset-password.module.css";
import { Link, useHistory } from "react-router-dom";
import { resetPassword } from "../../services/actions/user";
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
    Input,
    Button,
    PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ResetPassword = () => {
    const [codeValue, setCodeValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const onPasswordChange = (e) => {
        setPasswordValue(e.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault()

        if (!passwordValue || !codeValue) {
            return;
        }
        dispatch(resetPassword(passwordValue, codeValue))
        setCodeValue("");
        setPasswordValue("");
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
                        onChange={(evt) => setCodeValue(evt.target.value)}
                        value={codeValue}
                        name={"e-mail"}
                        error={false}
                        ref={inputRef}
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
    onPasswordSave: PropTypes.func.isRequired,
};

export default ResetPassword;