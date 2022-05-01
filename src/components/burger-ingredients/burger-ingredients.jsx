import React from 'react';
import { useState, useContext } from 'react';
import style from './burger-ingredients.module.css';
import PropTypes from 'prop-types';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { Ingredients } from '../services/ingredients'

export default function BurgerIngredients({ setIngredientPopup, setSelectedIngredient, targetIngredients, setTargetIngredients }) {
    const startIngredients = useContext(Ingredients);
    console.log(startIngredients)
    // реализовано добавление ингредиента при клике
    const onClick = (event) => {
        const id = event.currentTarget.dataset.id
        const foundIngredient = startIngredients.find(ingredient => ingredient._id === id)
        setSelectedIngredient(foundIngredient);
        setIngredientPopup(true);
        const targetIngredient = startIngredients.find(ingredient => ingredient._id === event.currentTarget.dataset.id)
        const selectedBun = targetIngredients.find(ingredient => ingredient.type === 'bun')
        const selectedBunIndex = targetIngredients.indexOf(selectedBun)

        if (targetIngredient.type === 'bun' && selectedBun) {
            const chosenIngredientsClone = targetIngredients;
            chosenIngredientsClone.splice(selectedBunIndex, 1, targetIngredient);
            setTargetIngredients([...chosenIngredientsClone])
        } else {
            setTargetIngredients([...targetIngredients, targetIngredient])
        }
    }


    const itemTemplate = ({ image, price, name, _id }) => {
        let ingredientCounter = 0;
        targetIngredients.forEach(ingredient => ingredient.name === name && (ingredient.type === 'bun' ? ingredientCounter += 2 : ingredientCounter += 1))
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
            <Counter count={ingredientCounter} size="default" />
        </li>)
    }

    return (
        <div className={style.constructor}>
            <h1 className="mt-10 mb-5 text text_type_main-large">Соберите бургер</h1>
            <div className={style.header}>
                <Tab value="bun">
                    Булки
                </Tab>
                <Tab value="sauce">
                    Соусы
                </Tab>
                <Tab value="main">
                    Начинки
                </Tab>
            </div>
            <div className={`${style.ingredients} mt-10 ingredients-container`}>
                <h2 className="mb-6 text text_type_main-medium">Булки</h2>
                <ul className={`${style.list} pt-6 pb-10 pr-4 pl-4`}>
                    {startIngredients.map((ingredient) => ingredient.type === 'bun' && itemTemplate(ingredient))}
                </ul>
                <h2 className="mb-6 text text_type_main-medium">Соусы</h2>
                <ul className={`${style.list} pt-6 pb-10 pr-4 pl-4`}>
                    {startIngredients.map((ingredient) => ingredient.type === 'sauce' && itemTemplate(ingredient))}
                </ul>
                <h2 className="mb-6 text text_type_main-medium">Начинки</h2>
                <ul className={`${style.list} pt-6 pb-10 pr-4 pl-4`}>
                    {startIngredients.map((ingredient) => ingredient.type === 'main' && itemTemplate(ingredient))}
                </ul>
            </div>
        </div>
    );
};

BurgerIngredients.propTypes = {
    setIngredientPopup: PropTypes.func.isRequired,
    setSelectedIngredient: PropTypes.func.isRequired,
}; 