const AuthController = require('../controllers').Auth

module.exports = app => {
    app.post('/login', AuthController.login)
    app.post('/register', AuthController.register)
}