import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-consturctor';
import style from './main.module.css';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { addIngredient } from '../../services/actions/ingredients';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../login/login';
import Register from '../register/register';
import ForgotPassword from '../forgot-password/forgot-password';
import ResetPassword from '../reset-password/reset-password';


const Main = () => {
  const dispatch = useDispatch();
  const chosenIngredients = useSelector(state => state.ingredientsData.chosenIngredients);
  const initialIngredients = useSelector(state => state.ingredientsData.ingredients);

  const handleDrop = (ingredientId) => {
    const targetIngredient = initialIngredients.find(ingredient => ingredient._id === ingredientId._id)
    const selectedBun = chosenIngredients.find(ingredient => ingredient.type === 'bun')
    const selectedBunIndex = chosenIngredients.indexOf(selectedBun)

    if (targetIngredient.type === 'bun' && selectedBun) {
      const chosenIngredientsClone = chosenIngredients.slice();
      chosenIngredientsClone.splice(selectedBunIndex, 1, targetIngredient);
      dispatch(addIngredient(chosenIngredientsClone));
    } else {
      dispatch(addIngredient([...chosenIngredients, targetIngredient]));
    }
  };

  return (
    <main className={style.main}>
          <Login />
          <Register />
          <ForgotPassword />
          <ResetPassword />

      <DndProvider backend={HTML5Backend}>
        <section className={style.main_container}>
          <BurgerIngredients />
          <BurgerConstructor onDropHandler={handleDrop} />
        </section>
      </DndProvider>
    </main>
  );
};

export default Main;