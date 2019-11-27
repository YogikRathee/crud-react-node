import { createReducer } from 'reduxsauce'
import { Contants } from '../actions'

const INITIAL_STATE = {
    loading   : false  
}

const start = (state = INITIAL_STATE, action) => {
    return { loading: true }
}

const stop = (state = INITIAL_STATE, action) => {
    return { loading: false }
}

const HANDLERS = {
    [ Contants.START_LOADING ]  : start,
    [ Contants.STOP_LOADING ]   : stop
}

export default createReducer(INITIAL_STATE, HANDLERS)