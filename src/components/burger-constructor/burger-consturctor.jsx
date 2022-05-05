import React from 'react';
import { useMemo } from 'react';
import style from './burger-constructor.module.css';
import PropTypes from 'prop-types';
import { DragIcon, ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import  {sendIngredients} from '../../utils/Api'
// import { ChosenIngredientsContext } from '../../services/chosenIngredientsContext';
import { useDispatch, useSelector } from 'react-redux';

export default function BurgerConstructor({ setOrderDetailsPopup }) {
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.ingredients.chosenIngredients);
  const orderPrice = useMemo(
    () => ingredients.reduce((acc, cur) => cur.type === 'bun' ? acc + (cur.price * 2) : acc + cur.price, 0),[ingredients]);
  const handleOrderButtonClick = () => {
    const ingredientsIds = ingredients.map(ingredient => ingredient._id)
      sendIngredients(ingredientsIds)
      .then(data => {
        dispatch({ type: 'GET_ORDER_DATA', payload: data });
        setOrderDetailsPopup(true)
      })
      .catch(err => { console.log(err) })
      .finally(() => { })
  }
  //удаление
  const handleDeleteIngredient = (item) => () => {
    const selectedIngredientIndex = ingredients.indexOf(item)
    const chosenIngredientsClone = ingredients.slice();
    chosenIngredientsClone.splice(selectedIngredientIndex, 1);
    dispatch({ type: 'DELETE_INGREDIENT', payload: chosenIngredientsClone });
  }
  const bunElementHandler = (chosenIngredients, property, trueValue, falseValue) => 
  chosenIngredients.find(ingredient => ingredient.type === 'bun') ? 
  `${(chosenIngredients.find(ingredient => ingredient.type === 'bun'))[property]} ${trueValue}` : falseValue
  return (
    <div className={`${style.constructor_container} pt-25`}>
      <div className="pr-6">
        {
          ingredients.length > 0 ? <ConstructorElement
            type="top"
            isLocked={true}
            text={bunElementHandler(ingredients, 'name', '(верх)', 'Выберите булку')}
            price={bunElementHandler(ingredients, 'price', '', '0')}
            thumbnail={bunElementHandler(ingredients, 'image', '', '')}

          /> : <p className="text text_type_main-medium pt-8 pb-15">
            Выберите булку
          </p>
        }
      </div>
      <ul className={`${style.list} pl-4 pr-4`}>
        {ingredients.map((ingredient, idx) =>
          ingredient.type !== 'bun' && <li key={`${ingredient._id}${idx}`} className={style.item}>
            <DragIcon />
            <ConstructorElement
              text={ingredient.name}
              price={ingredient.price}
              thumbnail={ingredient.image}
              handleClose={handleDeleteIngredient(ingredient)}
            />
          </li>
        )}
      </ul>
      <div className="pr-6">
        {
          ingredients.length > 0 && <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bunElementHandler(ingredients, 'name', '(низ)', 'Выберите булку')}
            price={bunElementHandler(ingredients, 'price', '', '0')}
            thumbnail={bunElementHandler(ingredients, 'image', '', '')}
          />
        }
      </div>
      <div className={`${style.button_container} pt-6 pr-6`}>
        <div className='mr-10'>
          <span className="text text_type_digits-medium mr-2">{orderPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button onClick={handleOrderButtonClick} className="pt-10" type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

BurgerConstructor.propTypes = {
  setOrderDetailsPopup: PropTypes.func.isRequired,
  // setChosenIngredients: PropTypes.func.isRequired,
  // setOrderData: PropTypes.func.isRequired,
};