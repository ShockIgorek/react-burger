import {
    GET_ORDER_DATA
} from '../actions/order';

const initialState = {
    orderDetails: null
};

export const orderReducer = (state = initialState, action) => {
    if (action.type === GET_ORDER_DATA) {
        return {
            ...state,
            orderDetails: action.payload,
        };
    } else {
        return state;
    }
}