import React from 'react';
import { useState } from 'react';
import style from './burger-ingredients.module.css';
import PropTypes from 'prop-types';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerIngredients({ setIngredientPopup, setSelectedIngredient, ingredients }) {
    const [current, setCurrent] = useState('bun')

    const onClick = (evt) => {
        const id = evt.currentTarget.dataset.id
        const foundIngredient = ingredients.find(ingredient => ingredient._id === id)
        setSelectedIngredient(foundIngredient)
        setIngredientPopup(true)
    }

    const itemTemplate = ({ image, price, name, _id }) => {
        return (<li data-id={_id} key={_id} onClick={onClick} className={style.ingredient}>
            <img alt={name} src={image} className={`${style.image} ml-4 mr-4`} />
            <div className={`${style.price_info} mt-4 mb-4`}>
                <span className="text text_type_digits-default mr-2">
                    {price}
                </span>
                <CurrencyIcon type="primary" />
            </div>
            <h3 className={`${style.text} text text_type_main-default`}>
                {name}
            </h3>
            <Counter count={1} size="default" />
        </li>)
    }

    return (
        <div className={style.constructor}>
            <h1 className="mt-10 mb-5 text text_type_main-large">Соберите бургер</h1>
            <div className={style.header}>
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
            <div className={`${style.ingredients} mt-10 ingredients-container`}>
                <h2 className="mb-6 text text_type_main-medium">Булки</h2>
                <ul className={`${style.list} pt-6 pb-10 pr-4 pl-4`}>
                    {ingredients.map((item) => item.type === 'bun' && itemTemplate(item))}
                </ul>
                <h2 className="mb-6 text text_type_main-medium">Соусы</h2>
                <ul className={`${style.list} pt-6 pb-10 pr-4 pl-4`}>
                    {ingredients.map((item) => item.type === 'sauce' && itemTemplate(item))}
                </ul>
                <h2 className="mb-6 text text_type_main-medium">Начинки</h2>
                <ul className={`${style.list} pt-6 pb-10 pr-4 pl-4`}>
                    {ingredients.map((item) => item.type === 'main' && itemTemplate(item))}
                </ul>
            </div>
        </div>
    );
};

BurgerIngredients.propTypes = {
    ingredients: PropTypes.array,
    setIngredientPopup: PropTypes.func,
    setSelectedIngredient: PropTypes.func,
}; 