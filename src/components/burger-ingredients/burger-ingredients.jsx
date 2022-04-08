import React from 'react';
import { data } from '../../utils/data';
import style from './burger-ingredients.module.css';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerIngredients() {
    const [current, setCurrent] = React.useState('bun');
    const itemTemplate = ({ image, price, name, _id }) => {
        return (
        <li key={_id} className={style.ingredient}>
            <img src={image} alt={name} className={`${style.image} ml-4 mr-4`} />
            <div className={`${style.price_info} mt-4 mb-4`}>
            <span className="text text_type_digits-default mr-2">
                {price}
            </span>
                <CurrencyIcon type="primary" />
            </div>
            <h3 className={`${style.text} text text_type_main-default`}>{name}</h3>
            <Counter count={1} size="default" />
        </li>)
    }
    return (
        <div className={style.ingredients}>
            <h1 className="mt-10 mb-5 text text_type_main-large">Соберите бургер</h1>
            <div className="" style={{ display: 'flex' }}>
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sause" active={current === 'sause'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={`${style.ingredients_window} mt-10 ingredients-container`}>
                <p className="mb-6 text text_type_main-medium">Булки</p>
                <ul className={`${style.list} pt-6 pb-10 pr-4 pl-4`}>
                    {data.map((item) => item.type === 'bun' && itemTemplate(item))}
                </ul>
                <p className="mb-6 text text_type_main-medium">Соусы</p>
                <div className={`${style.list} pt-6 pb-10 pr-4 pl-4`}>
                    {data.map((item) => item.type === 'sauce' && itemTemplate(item))}
                </div>
                <p className="mb-6 text text_type_main-medium">Начинки</p>
                <div className={`${style.list} pt-6 pb-10 pr-4 pl-4`}>
                    {data.map((item) => item.type === 'main' && itemTemplate(item))}
                </div>
            </div>
        </div>
    );
};