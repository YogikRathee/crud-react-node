import { createReducer } from 'reduxsauce'
import { Contants } from '../actions'

const INITIAL_STATE = {
    error   : false,
    success : false,
    message : ''  
}

const success = (state = INITIAL_STATE, action) => {
    return { ...state, success: true, message: action.message }
}

const error = (state = INITIAL_STATE, action) => {
    return { ...state, error: true, message: action.message }
}

const HANDLERS = {
    [ Contants.REGISTER_SUCCESS ]    : success,
    [ Contants.REGISTER_ERROR ]      : error
}

export default createReducer(INITIAL_STATE, HANDLERS)