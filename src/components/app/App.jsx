import React from 'react';
import { useEffect, useState } from 'react';
import style from './App.module.css';
import AppHeader from '../app-header/app-header'
import Main from '../main/main';
import getIngredients from '../../utils/Api'
import Popup from '../popup/popup';
import PopupOverlay from '../popup-overlay/popup-overlay';
import OrderDetails from '../order-details/order-details';
import IngredientCalories from '../ingredient-calories/ingredient-calories';
const url = 'https://norma.nomoreparties.space/api'

export default function App() {
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState({ element: {} });
  useEffect(() => {
    setIsLoading(true)
    getIngredients(url)
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
  const [isLoading, setIsLoading] = useState(false);


  return (
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
              ingredients={ingredients}
            />
            {
              orderDetailsPopup && (
                <PopupOverlay popupCloseHandler={setOrderDetailsPopup}>
                  <Popup popupCloseHandler={setOrderDetailsPopup}>
                    <OrderDetails number={'034536'} />
                  </Popup>
                </PopupOverlay>
              )
            }
            {
              ingredientPopup && (
                <PopupOverlay popupCloseHandler={setIngredientPopup}>
                  <Popup title='Детали ингредиентов' popupCloseHandler={setIngredientPopup}>
                    <IngredientCalories ingredients={selectedIngredient} />
                  </Popup>
                </PopupOverlay>
              )
            }
          </>
      }
    </div >
  );
};