// Доброго времени суток, уважаемый ревьюер.
// к сожалению, я не знал, что первая итерация проверки обязательна
// реализована часть функционала для второй части
// при клике на ингредиент он добавляется в заказ и одновременно открывается модальное окно
// реализованно удаление

import React from 'react';
import { useEffect, useState } from 'react';
import style from './app.module.css';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import {getIngredients} from '../../utils/Api'
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import IngredientCalories from '../ingredient-calories/ingredient-calories';
import { IngredientsContext } from '../../services/ingredientsContext';
import { OrderContext } from '../../services/orderContext';
import { ChosenIngredientsContext } from '../../services/chosenIngredientsContext';
import { SelectedIngredientContext } from '../../services/selectedIngredientContext';

export default function App() {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    getIngredients()
      .then(ingredients => {
        if (ingredients) {
          setIngredients(ingredients.data)
        }
      })
      .catch(err => { console.log(err) })
      .finally(() => setIsLoading(false))
  }, [])
  const [ingredientPopup, setIngredientPopup] = useState(false);
  const [orderDetailsPopup, setOrderDetailsPopup] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState({ element: {} });
  const [orderData, setOrderData] = useState({})
  const [chosenIngredients, setChosenIngredients] = useState([]);



  return (
    <IngredientsContext.Provider value={ingredients}>
      <OrderContext.Provider value={orderData}>
        <ChosenIngredientsContext.Provider value={chosenIngredients}>
          <SelectedIngredientContext.Provider value={selectedIngredient}>
            <div className={`${style.app} pb-10`}>
              {
                isLoading ? (
                <h1 className="text text_type_main-large">
                  Пожалуйста подождите...
                </h1>) :
                  <>
                    <AppHeader />
                    <Main
                      setSelectedIngredient={setSelectedIngredient}
                      setOrderDetailsPopup={setOrderDetailsPopup}
                      setIngredientPopup={setIngredientPopup}
                      setOrderData={setOrderData}
                      setChosenIngredients={setChosenIngredients}
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
          </SelectedIngredientContext.Provider>
        </ChosenIngredientsContext.Provider>
      </OrderContext.Provider>
    </IngredientsContext.Provider>
  );
};