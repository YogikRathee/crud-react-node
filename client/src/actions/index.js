import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
    registerRequest: ['name', 'email', 'password', 'phone'],
    registerSuccess: { message: 'Something went wrong with your request, Please try again!' },
    registerError: { message: 'Something went wrong with your request, Please try again!' },

    loginRequest: ['email', 'password'],
    loginSuccess: ['token'],
    loginError: { message: 'Something went wrong with your request, Please try again!' },

    startLoading: null,
    stopLoading: null,

    logout: ['history'],

    getUser: null,
    getUserSuccess: ['users'],
    getUserError: { message: 'Something went wrong with your request, Please try again!' },

    deleteUser: [ 'id' ],
    updateUser: [ 'id', 'updates' ]
    
})

export const Contants = Types
export default Creators