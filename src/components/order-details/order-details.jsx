import React from 'react';
import { useSelector } from 'react-redux';
import style from './order-details.module.css';
import doneGif from '../../images/done.gif';

export default function OrderDetails() {
  const orderData = useSelector(state => state.orderData.orderDetails);
  return (
    <div className={`${style.container}`}>
      <h3 className={`text text_type_digits-large pt-10 ${style.title}`}>{orderData.order.number}</h3>
      <p className="text text_type_main-medium pt-8 pb-15">
        идентификатор заказа
      </p>
      <img className="pb-15" src={doneGif} alt="чекаут" />
      <p className={`text text_type_main-default pb-2 ${style.text}`}>
        {orderData.success ? `Ваш '${orderData.name}' начали готовить` : 'Ваш заказ в очереди на приготовление'}
      </p>
      {orderData.success && (<p className="text text_type_main-default text_color_inactive pb-15">
        Дождитесь готовности на орбитальной станции
      </p>)}
    </div>
  );
};
