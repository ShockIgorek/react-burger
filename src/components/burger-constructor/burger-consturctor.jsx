import React from 'react';
import { useState, useEffect, useContext, useMemo } from 'react'
import style from './burger-constructor.module.css';
import PropTypes from 'prop-types';
import { DragIcon, ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
// import { Ingredients } from '../services/ingredients'


export default function BurgerConstructor({ setOrderDetailsPopup, targetIngredients }) {
  // const ingredients = useContext(Ingredients)
  const handleOrderButtonClick = () => {
    setOrderDetailsPopup(true)
  }
  // console.log(targetIngredients)
  const totalCost = useMemo(
    () => targetIngredients.reduce((acc, cur) =>
      cur.type === 'bun' ? acc + (cur.price * 2) : acc + cur.price, 0))
  const bunCheck = (targetIngredients, property, trueValue, falseValue) =>
    targetIngredients.find(ingredient => ingredient.type === 'bun') ? `${(targetIngredients.find(ingredient => ingredient.type === 'bun'))[property]
      } ${trueValue}` : falseValue

  return (
    <div className={`${style.constructor_container} pt-25`}>
      <div className="pr-6">
        <ConstructorElement
          type="top"
          isLocked={true}
          thumbnail={bunCheck(targetIngredients, 'image', '', '')}
          text={bunCheck(targetIngredients, 'name', '(верх)', 'Выберите булку')}
          price={bunCheck(targetIngredients, 'price', '', '0')}
        />
      </div>
      <ul className={`${style.list} pl-4 pr-4`}>
      {targetIngredients.map((ingredient, idx) =>
          ingredient.type !== 'bun' && <li key={`${ingredient._id}${idx}`} className={style.item}>
            <DragIcon />
            <ConstructorElement
              thumbnail={ingredient.image}
              text={ingredient.name}
              price={ingredient.price}
            />
          </li>
        )
        }
      </ul>
      <div className="pr-6">
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={bunCheck(targetIngredients, 'name', '(низ)', 'Выберите булку')}
          price={bunCheck(targetIngredients, 'price', '', '0')}
          thumbnail={bunCheck(targetIngredients, 'image', '', '')}
        />
      </div>

      <div className={`${style.button_container} pt-6 pr-6`}>
        <div className='mr-10'>
          <span className="text text_type_digits-medium mr-2">{totalCost}</span>
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
  setOrderDetailsPopup: PropTypes.func,
};