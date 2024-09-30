import {
    AUTH_LOGIN_LOADING,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_LOADED,
    AUTH_USER_LOADING,
    AUTH_USER_LOADED,
    AUTH_USER_LOADING_DONE,
    AUTH_USER_EXPIRED,
    AUTH_RELOADE_PAGE,
    AUTH_LOGOUT_SUCCESS,
    ONESTEP_CONFIRMATION_ACCOUNT,
    ONESTEP_FILING_BIODATA,
} from '../Actions/Type.Action'

const initialState = {
    isLoginLoading: false,
    Token: null,
    isAuth: null,
    isUserLoading: false,
    User: null,
}

// eslint-disable-next-line
export default function (state = initialState, action) {
    switch (action.type) {
        case AUTH_USER_LOADING:
            return {
                ...state,
                isUserLoading: true
            }
        case AUTH_USER_LOADED:
            return {
                ...state,
                User: action.payload
            }
        case AUTH_USER_LOADING_DONE:
            return {
                ...state,
                isUserLoading: false
            }
        case AUTH_RELOADE_PAGE:
            window.location.reload(true)
            return {
                ...state,
            }
        case AUTH_LOGIN_LOADING:
            return {
                ...state,
                isLoginLoading: true,
            }
        case AUTH_LOGIN_SUCCESS:
            localStorage.setItem('ERecEtana_token', action.payload.Token)
            localStorage.setItem('ERecEtana_isAuth', true)
            return {
                ...state,
                // ...action.payload,
                isAuth: true,
                Token: action.payload.Token,
                User: action.payload.User
            }
        case AUTH_LOGIN_LOADED:
            return {
                ...state,
                isLoginLoading: false,
            }
        case ONESTEP_CONFIRMATION_ACCOUNT:
            const User1 = action.payload
            User1.isActiveted = true
            return {
                ...state,
                User: User1
            }
        case ONESTEP_FILING_BIODATA:
            const User2 = action.payload
            User2.isBiodataComplete = true
            return {
                ...state,
                User: User2
            }
        case AUTH_USER_EXPIRED:
        case AUTH_LOGOUT_SUCCESS:
            localStorage.clear();
            return {
                ...state,
                token: null,
                User: null,
                isAuth: false,
                isUserLoading: false,
            }
        default:
            return state
    }
}