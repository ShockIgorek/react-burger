import React from 'react';
import style from "./ingredient.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
    CurrencyIcon,
    Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { selectIngredient } from "../../services/actions/ingredients";
import { changeIngredientsPopupState } from "../../services/actions/modal";
// import PropTypes from "prop-types";
import { ingredientTypes } from "../../utils/types";
import { Link, useLocation } from 'react-router-dom';

const Ingredient = ({ ingredient }) => {
    const { image, price, name, _id } = ingredient;
    const location = useLocation();

    const dispatch = useDispatch();
    const chosenIngredients = useSelector(
        (state) => state.ingredientsData.chosenIngredients
    );
    const initialIngredients = useSelector(
        (state) => state.ingredientsData.ingredients
    );
    const [{ isDrag }, dragRef] = useDrag({
        type: "ingredient",
        item: { _id },
        collect: (monitor) => ({
            isDrag: monitor.isDragging(),
        }),
    });
    let counter = 0;
    chosenIngredients.forEach(
        (ingredient) =>
            ingredient.name === name &&
            (ingredient.type === "bun"
                ? (counter += 2)
                : (counter += 1))
    );

    const showIngredientPopup = (evt) => {
        const id = evt.currentTarget.dataset.id;
        const foundIngredient = initialIngredients.find(
            (ingredient) => ingredient._id === id
        );
        dispatch(selectIngredient(foundIngredient));
        dispatch(changeIngredientsPopupState(true));
    };

    return (
        <li
            ref={dragRef}
            data-id={_id}
            onClick={showIngredientPopup}
            className={`${style.item} ${isDrag && style.moving}`}
            title="Переместите ингредиент в конструктор"
        >
            <Link className={style.link} to={{
                pathname: `/ingredients/${_id}`,
                state: { background: location },
            }}>
                <img
                    alt={name}
                    src={image}
                    className={`${style.image} ml-4 mr-4`}
                />
                <div className={`${style.price_info} mt-4 mb-4`}>
                    <span className="text text_type_digits-default mr-2">{price}</span>
                    <CurrencyIcon type="primary" />
                </div>
                <h3 className={`${style.text} text text_type_main-default`}>
                    {name}
                </h3>
                {counter > 0 && (
                    <Counter count={counter} size="default" />
                )}
                <div className={`${style.hint_icons}`}>
                    <span className={`${style.left_click_icon}`}></span>
                    <span className={`${style.right_click_icon}`}></span>
                    <span className={`${style.drag_icon}`}></span>
                </div>
            </Link>
        </li>
    );
};

Ingredient.propTypes = ingredientTypes

export default Ingredient;