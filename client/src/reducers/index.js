import { combineReducers } from 'redux';
import { Contants } from '../actions'

import Register from './register.reducer'
import Login from './login.reducer'
import Loader from './loader.reducer'
import Users from './user.reducer'

export default combineReducers({
    Register,
    Login,
    Loader,
    Users
});