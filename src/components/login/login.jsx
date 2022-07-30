import style from './login.module.css';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';


const Login = () => {
    const [value, setValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("")
    const inputRef = useRef(null)

    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0);
        alert("Icon Click Callback");
    }

    const onPasswordChange = (e) => {
        setPasswordValue(e.target.value)
    }

    return (
        <section className={style.wrapper}>
            <form className={style.form}>
                <p className={`${style.title} text text_type_main-medium`}>Вход</p>
                <Input
                    type={'text'}
                    placeholder={'E-mail'}
                    onChange={e => setValue(e.target.value)}
                    value={value}
                    name={'e-mail'}
                    error={false}
                    ref={inputRef}
                    onIconClick={onIconClick}
                    errorText={'Ошибка'}
                    size={'default'}
                />
                <PasswordInput onChange={onPasswordChange} value={passwordValue} name={'password'} />
                <Button type="primary" size="medium">
                    Войти
                </Button>
            </form>
            <p className="text text_type_main-default text_color_inactive">
                Вы — новый пользователь? <Link className={style.link} to="/">Зарегистрироваться</Link>
            </p>
            <p className="text text_type_main-default text_color_inactive">
                Забыли пароль? <Link className={style.link} to="/">Восстановить пароль</Link>
            </p>
        </section>
    )
}

export default Login; 