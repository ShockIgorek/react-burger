import {
    CHANGE_ORDER_DETAILS_POPUP_STATE,
    CHANGE_INGREDIENTS_POPUP_STATE
} from '../actions/modal';

const initialState = {
    orderDetailsPopup : false,
    ingredientsPopup: false,
};

export const popupReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_ORDER_DETAILS_POPUP_STATE: {
            return {
                ...state,
                orderDetailsPopup : action.payload,
            };
        }
        case CHANGE_INGREDIENTS_POPUP_STATE: {
            return {
                ...state,
                ingredientsPopup: action.payload
            };
        }
        default: {
            return state;
        }
    }
};