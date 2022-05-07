import React from 'react';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-consturctor';
import style from './main.module.css';
// import PropTypes from 'prop-types';

export default function Main(
  // setOrderDetailsPopup,
  // setIngredientPopup,
  // setOrderData,
) {

  return (
    <main className={style.main}>
      <section className={style.main_container}>
        <BurgerIngredients 
          // setChosenIngredients={setChosenIngredients} 
          // setSelectedIngredient={setSelectedIngredient} 
          // setIngredientPopup={setIngredientPopup} 
          />
        <BurgerConstructor 
          // setOrderData={setOrderData} 
          // setChosenIngredients={setChosenIngredients} 
          // setOrderDetailsPopup={setOrderDetailsPopup}
          />
      </section>
    </main>
  );
};

// Main.propTypes = {
//   setOrderDetailsPopup: PropTypes.func.isRequired,
//   setIngredientPopup: PropTypes.func.isRequired,
//   // setSelectedIngredient: PropTypes.func.isRequired,
//   // setOrderData: PropTypes.func.isRequired,
//   // setChosenIngredients: PropTypes.func.isRequired,
// }; 