import {
    combineReducers
} from 'redux';
import {
    ingredientsReducer
} from './ingredients';
import {
    orderReducer
} from './order';
import {
    popupReducer
} from './popup';

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    orderData: orderReducer,
    popupState: popupReducer,
});