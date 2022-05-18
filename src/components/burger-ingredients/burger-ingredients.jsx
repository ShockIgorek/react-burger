import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './burger-ingredients.module.css';
import { compareCoords } from '../../utils/compareCoords';
import Ingredient from '../ingredient/ingredient';

const BurgerIngredients = () => {
    const initialIngredients = useSelector(state => state.ingredientsData.ingredients)
    const [current, setCurrent] = useState('bun')
    const scrollHandler = (evt) => {
        evt.target.addEventListener('scroll', function () {
            setCurrent(compareCoords(style.constructor))
        });
    }
    const handleTabClick = (type) => {
        setCurrent(type)
        document.querySelector(`#${type}`).scrollIntoView({ block: "start", behavior: "smooth" })
    }
    return (
        <div className={style.constructor}>
            <h1 className="mt-10 mb-5 text text_type_main-large">Соберите бургер</h1>
            <div className={style.header}>
                <Tab value="bun" active={current === 'bun'} onClick={handleTabClick}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={handleTabClick}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={handleTabClick}>
                    Начинки
                </Tab>
            </div>
            <div onScroll={scrollHandler} className={`${style.ingredients} mt-10 ingredients-container`}>
                <h2 id="bun" className="mb-6 text text_type_main-medium">
                    Булки
                </h2>
                <ul className={`${style.list} pt-6 pb-10 pr-4 pl-4`}>
                    {initialIngredients.map((item) => item.type === 'bun' && <Ingredient key={item._id} ingredient={item} />)}
                </ul>
                <h2 id="sauce" className="mb-6 text text_type_main-medium">
                    Соусы
                </h2>
                <ul className={`${style.list} pt-6 pb-10 pr-4 pl-4`}>
                    {initialIngredients.map((item) => item.type === 'sauce' && <Ingredient key={item._id} ingredient={item} />)}
                </ul>
                <h2 id="main" className="mb-6 text text_type_main-medium">
                    Начинки
                </h2>
                <ul className={`${style.list} pt-6 pb-10 pr-4 pl-4`}>
                    {initialIngredients.map((item) => item.type === 'main' && <Ingredient key={item._id} ingredient={item} />)}
                </ul>
            </div>
        </div>
    );
};

export default BurgerIngredients;