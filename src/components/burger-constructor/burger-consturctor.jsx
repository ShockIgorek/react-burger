import React from 'react';
import { useState, useEffect } from 'react'
import style from './burger-constructor.module.css';
import PropTypes from 'prop-types';
import { DragIcon, ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerConstructor({ setOrderDetailsPopup, ingredients }) {
  const [burger, setBurger] = useState([])
  const handleOrderButtonClick = () => {
    setOrderDetailsPopup(true)
  }

  useEffect(() => {
    ingredients.forEach(ingredient => {
      setBurger((prev) => [...prev, ingredient])
    })
  }, [ingredients])

  return (
    <div className={`${style.constructor_container} pt-25`}>
      <div className="pr-6">
        <ConstructorElement
          type="top"
          isLocked={true}
          thumbnail={burger[0] && burger[0].image}
          text={`${burger[0] && burger[0].name} (верх)`}
          price={burger[0] && burger[0].price}
        />
      </div>
      <ul className={`${style.list} pl-4 pr-4`}>
        {burger.map((ingredient, idx) => idx > 0 && idx < burger.length - 1 && (
          <li key={`${ingredient._id}${idx}`} className={style.item}>
            <DragIcon />
            <ConstructorElement
              thumbnail={ingredient.image}
              text={ingredient.name}
              price={ingredient.price}
            />
          </li>
        )
        )}
      </ul>
      <div className="pr-6">
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${burger[0] && burger[0].name} (низ)`}
          price={burger[0] && burger[0].price}
          thumbnail={burger[0] && burger[0].image}
        />
      </div>

      <div className={`${style.button_container} pt-6 pr-6`}>
        <div className='mr-10'>
          <span className="text text_type_digits-medium mr-2">610</span>
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
  ingredients: PropTypes.array,
  setOrderDetailsPopup: PropTypes.func,
};