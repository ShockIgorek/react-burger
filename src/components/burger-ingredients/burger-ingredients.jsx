import React from 'react';
import { useState } from 'react';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './burger-ingredients.module.css';

export default function BurgerIngredients({ ingredients }) {
    const [current, setCurrent] = useState('bun')

    const itemTemplate = ({ image, price, name, _id }) => {
        return (<li key={_id} className={style.list_item}>
            <img alt={name} src={image} className={`${style.image} ml-4 mr-4`} />
            <div className={`${style.price_info} mt-4 mb-4`}>
                <span className="text text_type_digits-default mr-2">{price}</span>
                <CurrencyIcon type="primary" />
            </div>
            <h3 className={`${style.text} text text_type_main-default`}>{name}</h3>
            <Counter count={1} size="default" />
        </li>)
    }

    return (
        <div className={style.main_container}>
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
            <div className={`${style.ingredients_container} mt-10 ingredients-container`}>
                <h2 className="mb-6 text text_type_main-medium">Булки</h2>
                <ul className={`${style.list} pt-6 pb-10 pr-4 pl-4`}>
                    {ingredients.map((item) => item.type === 'bun' && itemTemplate(item))}
                </ul>
                <h2 className="mb-6 text text_type_main-medium">Соусы</h2>
                <div className={`${style.list} pt-6 pb-10 pr-4 pl-4`}>
                    {ingredients.map((item) => item.type === 'sauce' && itemTemplate(item))}
                </div>
                <h2 className="mb-6 text text_type_main-medium">Начинки</h2>
                <div className={`${style.list} pt-6 pb-10 pr-4 pl-4`}>
                    {ingredients.map((item) => item.type === 'main' && itemTemplate(item))}
                </div>
            </div>
        </div>
    );
};