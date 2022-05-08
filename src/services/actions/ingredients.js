import {
    getIngredients as get
} from '../../utils/Api'

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const SELECT_INGREDIENT = 'SELECT_INGREDIENT';
export const DELETE_SELECTED_INGREDIENT = 'DELETE_SELECTED_INGREDIENT';

export function getIngredients() {
    return function (dispatch) {
        dispatch({
            type: GET_INGREDIENTS,
        })
        get()
            .then(ingredients => {
                if (ingredients) {
                    dispatch({
                        type: GET_INGREDIENTS_SUCCESS,
                        payload: ingredients.data
                    })
                }
            })
            .catch(err => dispatch({
                type: GET_INGREDIENTS_FAILED
            }))
    }
}