import { createReducer } from 'reduxsauce'
import { Contants } from '../actions'

const INITIAL_STATE = {
    error   : false,
    success : false,
    token   : null,
    message : ''
}

const success = (state = INITIAL_STATE, action) => {
    return { ...state, success: true, error: false, token: action.token }
}

const error = (state = INITIAL_STATE, action) => {
    return { ...state, error: true, message: action.message }
}

const logout = (state = INITIAL_STATE, action) => {
    return { ...state, token: null }
}

const HANDLERS = {
    [ Contants.LOGIN_SUCCESS ]    : success,
    [ Contants.LOGIN_ERROR ]      : error,
    [ Contants.LOGOUT ]           : logout
}

export default createReducer(INITIAL_STATE, HANDLERS)