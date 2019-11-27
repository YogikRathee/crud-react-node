import { take, call, put, takeLatest, delay } from 'redux-saga/effects'
import Actions, { Contants } from '../actions'
import API from '../api'
import toast from '../toasts'

function* registerUser(action) {
    const { name, email, password, phone } = action
    const response = yield call(API.Auth.RegisterUser, { 
        name: name, 
        email: email, 
        password: password, 
        phone: phone 
    })
    if(response.success) {
        yield put(Actions.registerSuccess({ message: response.data.message }))
        toast.success(response.data.message)
    }
    else {
        const msg = response.error.hasOwnProperty('errmsg') ? response.error.errmsg : response.error
        yield put(Actions.registerError({ message: msg }))
        toast.error(msg)
    }
    if(localStorage.getItem('token') !== null)
        yield put(Actions.getUser())

}

function* loginUser(action) {
    const { email, password } = action
    const response = yield call(API.Auth.LoginUser, {
        email: email,
        password: password
    })
    if(response.success) {
        yield put(Actions.loginSuccess(response.data.token))
        localStorage.setItem('token', response.data.token)
        delay(1000)
    }
    else {
        const msg = response.error.hasOwnProperty('errmsg') ? response.error.errmsg : response.error
        yield put(Actions.loginError({ message: msg }))
        toast.error(msg)
    }
}

function* logout(action) {
    localStorage.removeItem('token')
    action.history.push('/')
}

function* getUsers() {
    const response = yield call(API.User.GetAllUsers)
    if(response.success){
        yield put(Actions.getUserSuccess(response.data.users))
    }else
        toast.error(response.error)
}

function* deleteUser(action) {
    const response = yield call(API.User.DeleteUser, { id: action.id} )
    if(response.success)
        toast.success(response.data.message)
    else
        toast.error(response.error)
    yield put(Actions.getUser())
}

function* updateUser(action) {
    const response = yield call(API.User.UpdateUser, {
        id: action.id,
        updates: action.updates
    })
    if(response.success)
        toast.success(response.data.message)
    else
        toast.error(response.error)
    yield put(Actions.getUser())
}

export default function* rootSaga() {
    yield takeLatest("REGISTER_REQUEST", registerUser);
    yield takeLatest("LOGIN_REQUEST", loginUser);
    yield takeLatest("LOGOUT", logout);
    yield takeLatest("GET_USER", getUsers)
    yield takeLatest("DELETE_USER", deleteUser)
    yield takeLatest("UPDATE_USER", updateUser)
}