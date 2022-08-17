import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-consturctor';
import style from './main.module.css';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { addIngredient } from '../../services/actions/ingredients';


// import Login from '../../pages/login/login'
// import Register from '../../pages/register/register';
// import ForgotPassword from '../../pages/forgot-password/forgot-password';
// import ResetPassword from '../../pages/reset-password/reset-password';
// import Profile from '../../pages/profile/profile';



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
    <main>
      <DndProvider backend={HTML5Backend}>
      <section className={style.main_container}>
          <BurgerIngredients />
          <BurgerConstructor onDropHandler={handleDrop} />
        </section>
        {/* <Switch>
          <Route exact path="/">
            <section className={style.main_container}>
              <BurgerIngredients />
              <BurgerConstructor onDropHandler={handleDrop} />
            </section>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword/>
          </Route>
          <Route path="/reset-password">
            <ResetPassword />
          </Route>
          <ProtectedRoute path="/profile">
            <Profile />
          </ProtectedRoute>
                    <ProtectedRoute path="/profile/orders">
            <Profile />
          </ProtectedRoute>
        </Switch> */}
      </DndProvider>
    </main>
  );
};


export default Main;