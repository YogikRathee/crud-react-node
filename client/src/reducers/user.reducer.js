import { createReducer } from 'reduxsauce'
import { Contants } from '../actions'

const INITIAL_STATE = {
    error   : false,
    success : false,
    users   : []
}

const success = (state = INITIAL_STATE, action) => {
    return { ...state, success: true, users: action.users }
}

const error = (state = INITIAL_STATE, action) => {
    return { ...state, error: true, error: action.message }
}

const HANDLERS = {
    [ Contants.GET_USER_SUCCESS ]    : success,
    [ Contants.GET_USER_ERROR ]      : error,
}

export default createReducer(INITIAL_STATE, HANDLERS)