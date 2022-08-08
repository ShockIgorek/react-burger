import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './app.module.css';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import OrderDetails from '../order-details/order-details';
import IngredientCalories from '../ingredient-calories/ingredient-calories';
import Modal from '../modal/modal';
import { getIngredients } from '../../services/actions/ingredients';
import { changeOrderDetailsPopupState, changeIngredientsPopupState } from '../../services/actions/modal';
import { deleteSelectedIngredient } from '../../services/actions/ingredients';
import { deleteOrderData } from '../../services/actions/order';
import {sendEmail as send} from '../../utils/Api';
import {resetPassword as reset} from '../../utils/Api'

const App = () => {
  const orderData = useSelector(state => state.orderData.orderDetails);
  const ingredientsPopup= useSelector(state => state.popupState.ingredientsPopup);
  const orderDetailsPopup = useSelector(state => state.popupState.orderDetailsPopup);
  const ingredientsRequest = useSelector(state => state.ingredientsData.ingredientsRequest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch])

  const handlePopupClose = () => {
    orderDetailsPopup ? dispatch(changeOrderDetailsPopupState(false)) : dispatch(changeIngredientsPopupState(false));
    orderDetailsPopup ? dispatch(deleteOrderData()) : dispatch(deleteSelectedIngredient())
  }
  const handlePasswordSave = (password) => {
    reset(password)
      .then(res => {
        console.log(res)
        if (res.token) {
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handlePasswordForgot = (email) => {
    send(email)
      .then(res => {
        if (res.token) {
          console.log(res)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className={`${style.app} pb-10`}>
      {
        ingredientsRequest ? (
        <h1 className="text text_type_main-large">
          Пожалуйста подождите...
        </h1>) :
          <>
            <AppHeader />
            <Main onPasswordForgot={handlePasswordForgot} />
            {
              orderDetailsPopup && (
                <Modal handlePopupClose={handlePopupClose}>
                  {orderData ? <OrderDetails /> : 
                  <h1 className="text text_type_main-large">
                    Пожалуйста подождите...
                  </h1>}
                </Modal>
              )
            }
            {
              ingredientsPopup&& (
                <Modal handlePopupClose={handlePopupClose} title='Детали ингредиентов'>
                  <IngredientCalories />
                </Modal>
              )
            }
          </>
      }
    </div >

  );
};

export default App;