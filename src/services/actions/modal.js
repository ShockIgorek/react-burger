export const CHANGE_ORDER_DETAILS_POPUP_STATE = 'CHANGE_ORDER_DETAILS_POPUP_STATE';
export const CHANGE_INGREDIENTS_POPUP_STATE = 'CHANGE_INGREDIENTS_POPUP_STATE';

export const changeOrderDetailsPopupState = (status) => ({ type: CHANGE_ORDER_DETAILS_POPUP_STATE, payload: status })
export const changeIngredientsPopupState = (status) => ({ type: CHANGE_INGREDIENTS_POPUP_STATE, payload: status })
