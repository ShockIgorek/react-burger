import mainApi from '../../utils/Api';

export const GET_ORDER = 'GET_ORDER';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const DELETE_ORDER = 'DELETE_ORDER'

export function getOrder(ingredientsIds) {
    return function (dispatch) {
        dispatch({
            type: GET_ORDER,
        })

        mainApi.sendIngredients(ingredientsIds)
            .then(data => {
                if (data) {
                    dispatch({
                        type: GET_ORDER_SUCCESS,
                        payload: data
                    })
                    // dispatch({ type: 'CHANGE_ORDER_DETAILS_POPUP_STATE', payload: true })
                }
            })
            .catch(err => dispatch({
                type: GET_ORDER_FAILED
            }))
    }
}