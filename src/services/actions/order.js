import {
    sendIngredients as send
} from '../../utils/Api'

export const GET_ORDER_DATA = 'GET_ORDER_DATA';
export const GET_ORDER_DATA_FAILED = 'GET_ORDER_DATA_FAILED';
export const GET_ORDER_DATA_SUCCESS = 'GET_ORDER_DATA_SUCCESS';
export const DELETE_ORDER_DATA = 'DELETE_ORDER_DATA';
export const setOrderDataLoading = () => ({ type: GET_ORDER_DATA })
export const setOrderDataLoadingSuccess = (data) => ({ type: GET_ORDER_DATA_SUCCESS, payload: data })
export const setOrderDataLoadingFailed = () => ({ type: GET_ORDER_DATA_FAILED })
export const deleteOrderData = () => ({ type: DELETE_ORDER_DATA })
export function getOrderData(ingredientsIds) {
    return function (dispatch) {
        dispatch({
            type: GET_ORDER_DATA,
        })

        send(ingredientsIds)
            .then(data => {
                if (data) {
                    dispatch({
                        type: GET_ORDER_DATA_SUCCESS,
                        payload: data
                    })
                }
            }).catch(err => setOrderDataLoadingFailed())
    }
}