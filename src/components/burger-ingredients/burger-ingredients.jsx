import React from 'react';
import { useState, useContext } from 'react';
import style from './burger-ingredients.module.css';
import PropTypes from 'prop-types';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { Ingredients } from '../services/ingredients'

export default function BurgerIngredients({ setIngredientPopup, setSelectedIngredient }) {
    const ingredients = useContext(Ingredients);
    const [current, setCurrent] = useState('bun')

    const onClick = (evt) => {
        const id = evt.currentTarget.dataset.id
<<<<<<< HEAD
        const foundIngredient = startIngredients.find(ingredient => ingredient._id === id)
        setSelectedIngredient(foundIngredient)
        setIngredientPopup(true)
    }
    // const detectCurrentTipeTitle = (type) => {
    //     if (type === 'sauce') {
    //         return 'Соусы'
    //     } else if (type === 'main') {
    //         return 'Начинки'
    //     }
    //     return 'Булки'
    // }

    const IngredientClick = (event) => {
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
        return (<li data-id={_id} key={_id} onClick={IngredientClick} className={style.ingredient}>
=======
        const foundIngredient = ingredients.find(ingredient => ingredient._id === id)
        setSelectedIngredient(foundIngredient)
        setIngredientPopup(true)
    }

    const itemTemplate = ({ image, price, name, _id }) => {
        return (<li data-id={_id} key={_id} onClick={onClick} className={style.ingredient}>
>>>>>>> parent of 0a7f19f (refactor save progress)
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
                <Tab value="bun" active={current === 'bun'} onClick={IngredientClick}>
                    Булки
                </Tab>
<<<<<<< HEAD
                <Tab value="sauce" active={current === 'sauce'} onClick={IngredientClick}>
=======
                <Tab value="sause" active={current === 'sause'} onClick={setCurrent}>
>>>>>>> parent of 0a7f19f (refactor save progress)
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={IngredientClick}>
                    Начинки
                </Tab>
            </div>
            <div className={`${style.ingredients} mt-10 ingredients-container`}>
                <h2 className="mb-6 text text_type_main-medium">Булки</h2>
                <ul className={`${style.list} pt-6 pb-10 pr-4 pl-4`}>
<<<<<<< HEAD
                    {startIngredients.map((ingredient) => ingredient.type === 'bun' && itemTemplate(ingredient))}
                </ul>
                <h2 className="mb-6 text text_type_main-medium">Соусы</h2>
                <ul className={`${style.list} pt-6 pb-10 pr-4 pl-4`}>
                    {startIngredients.map((ingredient) => ingredient.type === 'sauce' && itemTemplate(ingredient))}
                </ul>
                <h2 className="mb-6 text text_type_main-medium">Начинки</h2>
                <ul className={`${style.list} pt-6 pb-10 pr-4 pl-4`}>
                    {startIngredients.map((ingredient) => ingredient.type === 'main' && itemTemplate(ingredient))}
=======
                    {ingredients.map((item) => item.type === 'bun' && itemTemplate(item))}
                </ul>
                <h2 className="mb-6 text text_type_main-medium">Соусы</h2>
                <ul className={`${style.list} pt-6 pb-10 pr-4 pl-4`}>
                    {ingredients.map((item) => item.type === 'sauce' && itemTemplate(item))}
                </ul>
                <h2 className="mb-6 text text_type_main-medium">Начинки</h2>
                <ul className={`${style.list} pt-6 pb-10 pr-4 pl-4`}>
                    {ingredients.map((item) => item.type === 'main' && itemTemplate(item))}
>>>>>>> parent of 0a7f19f (refactor save progress)
                </ul>
            </div>
        </div>
    );
};

BurgerIngredients.propTypes = {
    ingredients: PropTypes.array.isRequired,
    setIngredientPopup: PropTypes.func.isRequired,
    setSelectedIngredient: PropTypes.func.isRequired,
}; 