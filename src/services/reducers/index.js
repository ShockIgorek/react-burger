import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { orderReducer } from './order';
import { popupReducer } from './modal';

export const rootReducer = combineReducers({
  ingredientsData: ingredientsReducer,
  orderData: orderReducer,
  popupState: popupReducer,
});