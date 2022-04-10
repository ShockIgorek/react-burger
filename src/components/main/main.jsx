import React from 'react';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-consturctor';
import style from './main.module.css';
import PropTypes from 'prop-types';

export default function Main({
  setOrderDetailsPopup,
  setIngredientPopup,
  setSelectedIngredient,
  ingredients
}) {
  return (
    <main className={style.main}>
      <section className={style.main_container}>
        <BurgerIngredients setSelectedIngredient={setSelectedIngredient} setIngredientPopup={setIngredientPopup} ingredients={ingredients} />
        <BurgerConstructor setOrderDetailsPopup={setOrderDetailsPopup} ingredients={ingredients}/>
      </section>
    </main>
  );
};

Main.propTypes = {
  ingredients: PropTypes.array,
  setOrderDetailsPopup: PropTypes.func,
  setIngredientPopup: PropTypes.func,
  setSelectedIngredient: PropTypes.func,
}; 