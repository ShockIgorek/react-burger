import React from 'react';
import { useState } from 'react';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-consturctor';
import style from './main.module.css';
import PropTypes from 'prop-types';

export default function Main({
  setOrderDetailsPopup,
  setIngredientPopup,
  setSelectedIngredient,
  

}) {
  const [targetIngredients, setTargetIngredients] = useState([]);
  return (
    <main className={style.main}>
      <section className={style.main_container}>
        <BurgerIngredients 
        setSelectedIngredient={setSelectedIngredient} 
        setIngredientPopup={setIngredientPopup} 
        targetIngredients={targetIngredients}
        setTargetIngredients={setTargetIngredients} />
        <BurgerConstructor 
        targetIngredients={targetIngredients} 
        setOrderDetailsPopup={setOrderDetailsPopup} />
      </section>
    </main>
  );
};

Main.propTypes = {
  ingredients: PropTypes.array.isRequired,
  setOrderDetailsPopup: PropTypes.func.isRequired,
  setIngredientPopup: PropTypes.func.isRequired,
  setSelectedIngredient: PropTypes.func.isRequired,
}; 