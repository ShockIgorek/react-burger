
import React from 'react';
import { useEffect, useState } from 'react';
import style from './app.module.css';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import { getIngredients } from '../../utils/Api'
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import IngredientCalories from '../ingredient-calories/ingredient-calories';
// import { IngredientsContext } from '../../services/ingredientsContext';
// import { OrderContext } from '../../services/orderContext';
// import { ChosenIngredientsContext } from '../../services/chosenIngredientsContext';
// import { SelectedIngredientContext } from '../../services/selectedIngredientContext';
// import { compose, createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { useSelector, useDispatch } from 'react-redux';


export default function App() {
  const dispatch = useDispatch();
  // const enhancer = composeEnhancers(applyMiddleware(thunk));
  // const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    getIngredients()
      .then(ingredients => {
        if (ingredients) {
          dispatch({ type: 'GET_INGREDIENTS', payload: ingredients.data });
        }
      })
      .catch(err => { console.log(err) })
      .finally(() => setIsLoading(false))
  }, [dispatch])
  
  const [ingredientPopup, setIngredientPopup] = useState(false);
  const [orderDetailsPopup, setOrderDetailsPopup] = useState(false);
  // const [selectedIngredient, setSelectedIngredient] = useState({ element: {} });
  // const [orderData, setOrderData] = useState({})
  // const [chosenIngredients, setChosenIngredients] = useState([]);
  const orderData = useSelector(state => state.orderData.orderDetails);


  return (
    // <OrderContext.Provider value={orderData}>
      <div className={`${style.app} pb-10`}>
        {
          isLoading ? (
            <h1 className="text text_type_main-large">
              Пожалуйста подождите...
            </h1>) :
            <>
              <AppHeader />
              <Main
                // setSelectedIngredient={setSelectedIngredient}
                setOrderDetailsPopup={setOrderDetailsPopup}
                setIngredientPopup={setIngredientPopup}
                // setOrderData={setOrderData}
                // setChosenIngredients={setChosenIngredients}
              />
              {
                orderDetailsPopup && (
                  <Modal
                    modalCloseHandler={setOrderDetailsPopup}>
                    {orderData && <OrderDetails />}
                  </Modal>
                )
              }
              {
                ingredientPopup && (
                  <Modal
                    title='Детали ингредиентов'
                    modalCloseHandler={setIngredientPopup}>
                    <IngredientCalories
                      popupCloseHandler={setIngredientPopup} />
                  </Modal>
                )
              }
            </>
        }
      </div >
    // </OrderContext.Provider>
  );
};