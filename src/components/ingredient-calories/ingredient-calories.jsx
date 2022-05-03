import React from 'react';
import { useContext } from 'react';
import style from './ingredient-calories.module.css';
import { SelectedIngredientContext } from '../../services/selectedIngredientContext';

export default function IngredientCalories() {
    const selectedIngredient = useContext(SelectedIngredientContext);
    return (
        <div className={`${style.container}`}>
            <img width="480" height="240" alt={selectedIngredient.name} src={selectedIngredient && selectedIngredient.image} />
            <p className="text text_type_main-medium pt-4 pb-8">{selectedIngredient && selectedIngredient.name}</p>
            <ul className={`${style.list} pt-8`}>
                <li className={`${style.item} text text_type_main-default text_color_inactive`}>
                    <span>
                        Калории,ккал
                    </span>
                    {selectedIngredient.calories}
                </li>
                <li className={`${style.item} text text_type_main-default text_color_inactive`}>
                    <span>
                        Белки, г
                    </span>
                    {selectedIngredient.proteins}
                </li>
                <li className={`${style.item} text text_type_main-default text_color_inactive`}>
                    <span>
                        Жиры, г
                    </span>
                    {selectedIngredient.fat}
                </li>
                <li className={`${style.item} text text_type_main-default text_color_inactive`}>
                    <span>
                        Углеводы, г
                    </span>
                    {selectedIngredient.carbohydrates}
                </li>
            </ul>
        </div>
    );
};