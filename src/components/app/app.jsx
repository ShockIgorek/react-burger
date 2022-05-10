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

export default function App() {
  const orderData = useSelector(state => state.orderData.orderDetails);
  const ingredientsPopup = useSelector(state => state.popupState.ingredientsPopup);
  const orderDetailsPopup = useSelector(state => state.popupState.orderDetailsPopup);
  const ingredientsRequest = useSelector(state => state.ingredientsData.ingredientsRequest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch])

  return (
    <div className={`${style.app} pb-10`}>
      {
        ingredientsRequest ? (<h1 className="text text_type_main-large">
          Пожалуйста подождите...
        </h1>) :
          <>
            <AppHeader />
            <Main />
            {
              orderDetailsPopup && (
                <Modal>
                  {orderData ? <OrderDetails /> : <h1 className="text text_type_main-large">
                    Пожалуйста подождите...
                  </h1>}
                </Modal>
              )
            }
            {
              ingredientsPopup && (
                <Modal title='Детали ингредиентов'>
                  <IngredientCalories />
                </Modal>
              )
            }
          </>
      }
    </div >

  );
};