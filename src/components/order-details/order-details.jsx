import React from 'react';
import style from './order-details.module.css';
import doneGif from '../../images/done.gif';
import PropTypes from 'prop-types';

export default function OrderDetails({ number }) {
  return (
    <div>
      <h3 className={`text text_type_digits-large pt-15 ${style.title}`}>{number}</h3>
      <p className="text text_type_main-medium pt-8 pb-15">
        идентификатор заказа
      </p>
      <img className="pb-15" src={doneGif} alt="чекаут" />
      <p className="text text_type_main-default pb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive pb-15">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

OrderDetails.propTypes = {
  orderData: PropTypes.number
};

