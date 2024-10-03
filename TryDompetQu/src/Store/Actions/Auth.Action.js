import axios from 'axios'

import {
    AUTH_LOGIN_LOADING,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_LOADED,
    AUTH_USER_LOADING,
    AUTH_USER_LOADED,
    AUTH_USER_LOADING_DONE,
    // AUTH_USER_EXPIRED,
    AUTH_RELOADE_PAGE,
    AUTH_LOGOUT_SUCCESS,
    ONESTEP_CONFIRMATION_ACCOUNT,
} from '../Actions/Type.Action'

import {
    Create_Error_Messages,
    Create_Success_Messages,
} from './Messages.Actions'

import { isDev } from '../../Global'

import { Get_IpAddres, defaultHeader, tokenConfig, ErrorHandler } from './Base.Action'

import { Error_Messages_Standardization } from '../../Global'

export const LogIn = (UserName, Password, isOneStep, PrefLocation) => async (dispatch) => {
    try {
        dispatch({ type: AUTH_LOGIN_LOADING })
        if (!UserName || !Password) {
            const ErrorResponse = Error_Messages_Standardization(400, 'Form Tidak Lengkap')
            dispatch(Create_Error_Messages(400, 'Form Tidak Lengkap'))
            throw ErrorResponse
        }
        const IpAddres = Get_IpAddres()

        const body = JSON.stringify({ UserName, Password })
        const UserData = await axios.post(`${IpAddres}/auth/login`, body, defaultHeader())
        if (UserData) {
            dispatch({
                type: AUTH_LOGIN_SUCCESS,
                payload: UserData.data
            })
            dispatch({ type: AUTH_LOGIN_LOADED })
            if (!isOneStep) {
                dispatch({
                    type: AUTH_RELOADE_PAGE
                })
            }
            if (PrefLocation) {
                window.location.href = PrefLocation
            }
            const Token = UserData.data.Token
            return Token
        } else {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak lengkap')
            throw ErrorResponse
        }
    } catch (err) {
        dispatch({ type: AUTH_LOGIN_LOADED })
        ErrorHandler(err, 'LogIn')
    }
}

export const Load_User = (Token) => async (dispatch, getState) => {
    try {
        dispatch({ type: AUTH_USER_LOADING })
        const IpAddres = Get_IpAddres()
        const isInDev = isDev()

        const UserData = await axios.get(`${IpAddres}/auth/auth`, tokenConfig(getState, Token))
        if (isInDev) {
            console.log('Log ~ file: Auth.Action.js ~ line 72 ~ constLoad_User= ~ UserData', UserData)
        }
        if (UserData) {
            dispatch({
                type: AUTH_USER_LOADED,
                payload: UserData.data
            })
            dispatch({ type: AUTH_USER_LOADING_DONE })
        } else {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak ditemukan')
            throw ErrorResponse
        }
    } catch (err) {
        dispatch({ type: AUTH_USER_LOADING_DONE })
        ErrorHandler(err, 'Load_User')
    }
}

export const get_Activation_Code = () => async (dispatch, getState) => {
    try {
        const IpAddres = Get_IpAddres()

        const UserData = await axios.get(`${IpAddres}/auth/activationcode`, tokenConfig(getState))
        if (UserData) {
            // dispatch({
            //     type: AUTH_USER_LOADED,
            //     payload: UserData.data
            // })
            // dispatch({ type: AUTH_USER_LOADING_DONE })
        } else {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak ditemukan')
            throw ErrorResponse
        }
    } catch (err) {
        ErrorHandler(err, 'get_Activation_Code')
    }
}

export const Activation_Code = (ActivationInput, isOneStep, User) => async (dispatch, getState) => {
    try {
        const IpAddres = Get_IpAddres()

        const body = JSON.stringify({ ActivationInput })

        const UserData = await axios.post(`${IpAddres}/auth/activation`, body, tokenConfig(getState))
        if (UserData) {
            dispatch(Create_Success_Messages(null, 'Activated'))
            if (isOneStep) {
                dispatch({
                    type: ONESTEP_CONFIRMATION_ACCOUNT,
                    payload: User
                })
            } else {
                dispatch({
                    type: AUTH_RELOADE_PAGE
                })
            }
        } else {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak ditemukan')
            throw ErrorResponse
        }
    } catch (err) {
        ErrorHandler(err, 'Activation_Code')
    }
}

export const Forget_Password = (Email) => async (dispatch, getState) => {
    try {
        const IpAddres = Get_IpAddres()

        const body = JSON.stringify({ Email })

        const UserData = await axios.post(`${IpAddres}/auth/forgetpassword`, body, tokenConfig(getState))
        if (UserData) {
            dispatch(Create_Success_Messages(200, 'Email Send'))
        } else {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak ditemukan')
            throw ErrorResponse
        }
    } catch (err) {
        ErrorHandler(err, 'Forget_Password')
    }
}

export const Forget_Password_Activation = (Email, ActivationInput, NewPassword) => async (dispatch, getState) => {
    try {
        const IpAddres = Get_IpAddres()

        const body = JSON.stringify({ Email, ActivationInput, NewPassword })

        const UserData = await axios.post(`${IpAddres}/auth/forgetpassword/activation`, body, tokenConfig(getState))
        if (UserData) {
            dispatch(Create_Success_Messages(200, 'Email Send'))
            window.location.href = '/login'
        } else {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak ditemukan')
            throw ErrorResponse
        }
    } catch (err) {
        ErrorHandler(err, 'Forget_Password_Activation')
    }
}

export const LogOut = () => (dispatch) => {
    dispatch({
        type: AUTH_LOGOUT_SUCCESS,
    })
}