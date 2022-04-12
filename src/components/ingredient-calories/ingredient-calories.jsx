import React from 'react';
import style from './ingredient-calories.module.css';
import PropTypes from 'prop-types';

export default function IngredientCalories({ ingredient }) {
    return (
        <div>
            <img width="480" height="240" alt={ingredient.name} src={ingredient && ingredient.image} />
            <p className="text text_type_main-medium pt-4 pb-8">{ingredient && ingredient.name}</p>
            <ul className={`${style.list} pt-8`}>
                <li className={`${style.item} text text_type_main-default text_color_inactive`}>
                    <span>
                        Калории,ккал
                    </span>
                    {ingredient.calories}
                </li>
                <li className={`${style.item} text text_type_main-default text_color_inactive`}>
                    <span>
                        Белки, г
                    </span>
                    {ingredient.proteins}
                </li>
                <li className={`${style.item} text text_type_main-default text_color_inactive`}>
                    <span>
                        Жиры, г
                    </span>
                    {ingredient.fat}
                </li>
                <li className={`${style.item} text text_type_main-default text_color_inactive`}>
                    <span>
                        Углеводы, г
                    </span>
                    {ingredient.carbohydrates}
                </li>
            </ul>
        </div>
    );
};

IngredientCalories.propTypes = {
    ingredient: PropTypes.object.isRequired,
}; 