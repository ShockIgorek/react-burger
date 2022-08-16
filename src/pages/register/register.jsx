import { useState, useRef } from "react";
import style from "./register.module.css";
import { Link, useHistory } from "react-router-dom";
import { registration } from "../../services/actions/user";
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

const Register = () => {
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();


    const onPasswordChange = (evt) => {
        setPasswordValue(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault()
        if (!nameValue || !emailValue || !passwordValue) {
            return;
        }
        dispatch(registration(emailValue, nameValue, passwordValue));
    };


    return (
        <section className={style.window}>
            <form className={style.form} onSubmit={handleSubmit}>
                <p className={`${style.title} text text_type_main-medium`}>
                    Регистрация
                </p>
                <div className="mt-6 mb-6">
                    <Input
                        type={"text"}
                        placeholder={"Имя"}
                        onChange={(evt) => setNameValue(evt.target.value)}
                        value={nameValue}
                        name={"name"}
                        error={false}
                        ref={inputRef}
                        errorText={"Ошибка"}
                        size={"default"}
                    />
                </div>
                <div className="mb-6">
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
                    Зарегистрироваться
                </Button>
            </form>
            <p className="text text_type_main-default text_color_inactive">
                {"Уже зарегистрированы? "}
                <Link className={style.link} to="/login">
                    Войти
                </Link>
            </p>
        </section>
    );
};

Register.propTypes = {
    onRegister: PropTypes.func.isRequired,
};

export default Register;