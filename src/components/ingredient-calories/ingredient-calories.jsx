import React from 'react';
import style from './ingredient-calories.module.css';
import PropTypes from 'prop-types';

export default function IngredientCalories({ ingredients }) {
    return (
        <div>
            <img width="480" height="240" alt={ingredients.name} src={ingredients && ingredients.image} />
            <p className="text text_type_main-medium pt-4 pb-8">{ingredients && ingredients.name}</p>
            <ul className={`${style.list} pt-8`}>
                <li className={`${style.item} text text_type_main-default text_color_inactive`}>
                    <span>
                        Калории,ккал
                    </span>
                    {ingredients.calories}
                </li>
                <li className={`${style.item} text text_type_main-default text_color_inactive`}>
                    <span>
                        Белки, г
                    </span>
                    {ingredients.proteins}
                </li>
                <li className={`${style.item} text text_type_main-default text_color_inactive`}>
                    <span>
                        Жиры, г
                    </span>
                    {ingredients.fat}
                </li>
                <li className={`${style.item} text text_type_main-default text_color_inactive`}>
                    <span>
                        Углеводы, г
                    </span>
                    {ingredients.carbohydrates}
                </li>
            </ul>
        </div>
    );
};

IngredientCalories.propTypes = {
    ingredients: PropTypes.object
}; 