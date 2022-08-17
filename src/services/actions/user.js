import {
    login as log
} from '../../utils/Api';
import {
    register as register
} from '../../utils/Api'
import {
    sendEmail as send
} from '../../utils/Api'
import {
    resetPassword as reset
}
from '../../utils/Api'
import {
    getUserData as getUser
}
from '../../utils/Api'

import {
    sendUserData as sendUser
}
from '../../utils/Api'
import {
    refreshToken as refresh
}
from '../../utils/Api'


export const REGISTRATION = 'REGISTRATION';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SECCESS';
export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED';

export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';

export const SEND_USER_DATA = 'SEND_USER_DATA';
export const SEND_USER_DATA_SUCCESS = 'SEND_USER_DATA_SUCCESS';
export const SEND_USER_DATA_FAILED = 'SEND_USER_DATA_FAILED';

export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILED = 'REFRESH_TOKEN_FAILED';


export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_FAILED = 'GET_USER_DATA_FAILED';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';


export const setRegistrationLoading = () => ({
    type: REGISTRATION
});
export const setRegistrationLoadingSuccess = (token) => ({
    type: REGISTRATION_SUCCESS,
    payload: token
});
export const setRegistrationLoadingFailed = () => ({
    type: REGISTRATION_FAILED
});

export const setLoginLoading = () => ({
    type: LOGIN
});
export const setLoginLoadingSuccess = () => ({
    type: LOGIN_SUCCESS
});
export const setLoginLoadingFailed = () => ({
    type: LOGIN_FAILED
});

export const setForgotPasswordLoading = () => ({
    type: FORGOT_PASSWORD
});
export const setForgotPasswordLoadingSuccess = () => ({
    type: FORGOT_PASSWORD_SUCCESS
});
export const setForgotPasswordLoadingFailed = () => ({
    type: FORGOT_PASSWORD_FAILED
});

export const setResetPasswordLoading = () => ({
    type: RESET_PASSWORD
});
export const setResetPasswordLoadingSuccess = () => ({
    type: RESET_PASSWORD_SUCCESS
});
export const setResetPasswordLoadingFailed = () => ({
    type: RESET_PASSWORD_FAILED
});

export const setGetUserDataLoading = () => ({
    type: GET_USER_DATA
});
export const setGetUserDataLoadingSuccess = (userData) => ({
    type: GET_USER_DATA_SUCCESS,
    payload: userData
});
export const setSendUserDataLoading = () => ({
    type: SEND_USER_DATA
});
export const setSendUserDataLoadingSuccess = (userData) => ({
    type: SEND_USER_DATA_SUCCESS,
    payload: userData
});
export const setSendUserDataLoadingFailed = () => ({
    type: SEND_USER_DATA_FAILED
});
export const setGetUserDataLoadingFailed = () => ({
    type: GET_USER_DATA_FAILED
});

export const setRefreshTokenLoading = () => ({
    type: REFRESH_TOKEN
});
export const setRefreshTokenLoadingSuccess = (token) => ({
    type: REFRESH_TOKEN_SUCCESS,
    payload: token
});
export const setRefreshTokenLoadingFailed = () => ({
    type: REFRESH_TOKEN_FAILED
});

export const setLogoutLoading = () => ({
    type: LOGOUT
});
export const setLogoutLoadingSuccess = () => ({
    type: LOGOUT_SUCCESS
});
export const setLogoutLoadingFailed = () => ({
    type: LOGOUT_FAILED
});

export const registration = (email, name, password) => {
    return (dispatch) => {
        dispatch(setRegistrationLoading())
        register(email, name, password)
            .then(res => {
                console.log(res)
                dispatch(setRegistrationLoadingSuccess(res.accessToken))

                localStorage.setItem('refreshToken', res.refreshToken)
            })
            .catch((err) => {
                dispatch(setRegistrationLoadingFailed())
                console.log(err)
            })
    }
}

export const sendUserData = (accessToken, name, email, password) => {
    return (dispatch) => {
        dispatch(setSendUserDataLoading())

        sendUser(accessToken, name, email, password)
            .then((res) => {
                dispatch(setSendUserDataLoadingSuccess(res.user))
            })
            .catch((err) => {
                console.log(err)
                dispatch(setSendUserDataLoadingFailed())
            })
    }
}

export const login = (email, password) => {
    return (dispatch) => {
        dispatch(setLoginLoading())

        log(email, password)
            .then(res => {
                console.log(res)
                dispatch(setLoginLoadingSuccess(res))
                localStorage.setItem('refreshToken', res.refreshToken)
                // history.push('/')
            })
            .catch((err) => {
                dispatch(setLoginLoadingFailed())
                console.log(err)
            })
    }
}
export const refreshToken = (refreshToken) => {
    return (dispatch) => {
        dispatch(setRefreshTokenLoading())
        refresh(refreshToken)
            .then((res) => {
                localStorage.setItem('refreshToken', res.refreshToken)
                dispatch(setRefreshTokenLoadingSuccess(res.accessToken))
            })
            .catch((err) => {
                dispatch(setForgotPasswordLoadingFailed())
                console.log(err)
            })
    }
}

export const getUserData = (accessToken) => {
    return (dispatch) => {
        dispatch(setGetUserDataLoading())
        getUser()
            .then((res) => {
                dispatch(setGetUserDataLoadingSuccess(res.user))
            })
            .catch((err) => {
                dispatch(refreshToken(localStorage.getItem('refreshToken')))
                dispatch(setGetUserDataLoadingFailed())
                console.log(err)
            })
    }
}

export const forgotPassword = (email) => {
    return (dispatch) => {
        dispatch(setForgotPasswordLoading())
        send(email)
            .then(() => {
                setForgotPasswordLoadingSuccess()
            })
            .catch((err) => {
                setForgotPasswordLoadingFailed()
                console.log(err)
            })
    }
}

export const resetPassword = (password, code) => {
    return (dispatch) => {
        dispatch(setResetPasswordLoading())
        reset(password, code)
            .then((res) => {
                setForgotPasswordLoadingSuccess()
            })
            .catch((err) => {
                setResetPasswordLoadingFailed();
                console.log(err)
            })
    }
}

export const logout = (refreshToken) => {
    return (dispatch) => {
        dispatch(setLogoutLoading())
        refresh(refreshToken)
            .then(() => {
                localStorage.removeItem('refreshToken')
                dispatch(setLogoutLoadingSuccess())
            })
            .catch((err) => {
                dispatch(setLoginLoadingFailed())
                console.log(err)
            })
    }
}