import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './burger-ingredients.module.css';
import { compareCoords } from '../../utils/compareCoords';

export default function BurgerIngredients() {
    const dispatch = useDispatch();
    const initialIngredients = useSelector(state => state.ingredientsData.ingredients)
    const chosenIngredients = useSelector(state => state.ingredientsData.chosenIngredients);
    const [current, setCurrent] = useState('bun')
    const [isIngredientDragging, setIngredientDrag] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({});
    const [ingredientPosition, setIngredientPosition] = useState({});
    const ingredientRef = useRef();

    useEffect(() => {
        if (ingredientRef.current) {
            ingredientRef.current.style.transform = `translate(${ingredientPosition.x}px, ${ingredientPosition.y}px)`
        }
    }, [ingredientPosition]);

    const scrollHandler = (evt) => {
        evt.target.addEventListener('scroll', function () {
            setCurrent(compareCoords(style.main_container))
        });
    }

    const handleMouseDown = (e) => {
        setIngredientDrag(true);

        setCursorPosition({
            ...cursorPosition,
            x: e.clientX - e.currentTarget.getBoundingClientRect().left,
            y: e.clientY - e.currentTarget.getBoundingClientRect().top
        });
    };

    const handleMouseMove = (e) => {
        if (!isIngredientDragging) return;
        e.stopPropagation();
        e.preventDefault();

        setIngredientPosition({
            ...ingredientPosition,
            x: e.clientX - cursorPosition.x,
            y: e.clientY - cursorPosition.y
        });
    };

    const handleMouseUp = () => {
        setIngredientDrag(false);
    };

    const handleTabClick = (type) => {
        setCurrent(type)
        document.querySelector(`#${type}`).scrollIntoView({ block: "start", behavior: "smooth" })
    }

    const handleIngredientExplore = (evt) => {
        evt.preventDefault()
        const id = evt.currentTarget.dataset.id
        const foundIngredient = initialIngredients.find(ingredient => ingredient._id === id)
        dispatch({ type: 'SELECT_INGREDIENT', payload: foundIngredient });
        dispatch({ type: 'CHANGE_INGREDIENTS_POPUP_STATE', payload: true });
    }

    const handleChoseIngredient = (evt) => {
        const targetIngredient = initialIngredients.find(ingredient => ingredient._id === evt.currentTarget.dataset.id)
        const selectedBun = chosenIngredients.find(ingredient => ingredient.type === 'bun')
        const selectedBunIndex = chosenIngredients.indexOf(selectedBun)

        if (targetIngredient.type === 'bun' && selectedBun) {
            const chosenIngredientsClone = chosenIngredients.slice();
            chosenIngredientsClone.splice(selectedBunIndex, 1, targetIngredient);
            dispatch({ type: 'ADD_INGREDIENT', payload: [...chosenIngredientsClone] });
        } else {
            dispatch({ type: 'ADD_INGREDIENT', payload: [...chosenIngredients, targetIngredient] });
        }
    }

    const itemTemplate = ({ image, price, name, _id }) => {
        let ingredientCounter = 0;
        chosenIngredients.forEach(ingredient => ingredient.name === name && (ingredient.type === 'bun' ? ingredientCounter += 2 : ingredientCounter += 1))

        return (<li 
        data-id={_id} 
        key={_id} 
        ref={ingredientRef} 
        onMouseMove={handleMouseMove} 
        onMouseDown={handleMouseDown} 
        onMouseUp={handleMouseUp} 
        onClick={handleChoseIngredient} 
        onContextMenu={handleIngredientExplore} 
        className={style.ingredient}>
            <img alt={name} src={image} className={`${style.image} ml-4 mr-4`} />
            <div className={`${style.price_info} mt-4 mb-4`}>
                <span className="text text_type_digits-default mr-2">{price}</span>
                <CurrencyIcon type="primary" />
            </div>
            <h3 className={`${style.text} text text_type_main-default`}>{name}</h3>
            <Counter count={ingredientCounter} size="default" />
        </li>)
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
                    {initialIngredients.map((item) => item.type === 'bun' && itemTemplate(item))}
                </ul>
                <h2 id="sauce" className="mb-6 text text_type_main-medium">
                    Соусы
                </h2>
                <ul className={`${style.list} pt-6 pb-10 pr-4 pl-4`}>
                    {initialIngredients.map((item) => item.type === 'sauce' && itemTemplate(item))}
                </ul>
                <h2 id="main" className="mb-6 text text_type_main-medium">
                    Начинки
                </h2>
                <ul className={`${style.list} pt-6 pb-10 pr-4 pl-4`}>
                    {initialIngredients.map((item) => item.type === 'main' && itemTemplate(item))}
                </ul>
            </div>
        </div>
    );
};