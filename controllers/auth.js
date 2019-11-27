const User = require('../models/user'),
    jwt = require('jsonwebtoken'),
    secret = process.env.SECRET,
    passwordHash = require('password-hash');

module.exports = {
    login: (req, res) => {
        return User
            .findOne({ email: req.body.email })
            .then(result => {
                console.log(result)
                if (result != null) {
                    if (passwordHash.verify(req.body.password, result.password))
                        jwt.sign({ result: result.email }, secret, (err, token) => {
                            console.log('token')
                            if (err) {
                                res.send({
                                    success: false,
                                    error: 'JWT Signing failed!',
                                    data: {}
                                })
                            }
                            else
                                res.send({
                                    success: true,
                                    error: null,
                                    data: {
                                        token: token,
                                        email: result.email,
                                        name: result.name
                                    }
                                })
                        })
                    else
                        res.send({
                            success: false,
                            error: 'Password & Email does not match',
                            data: {}
                        })
                }
                else
                    res.send({
                        success: false,
                        error: 'No user with this email & password',
                        data: {}
                    })
            })
            .catch(err => {
                res.send({
                    success: false,
                    error: err,
                    data: {}
                })
            })
    },
    register: (req, res) => {
        return User
            .create({ ...req.body, password: passwordHash.generate(req.body.password) })
            .then(result => res.send({
                success: true,
                error: null,
                data: {
                    message: 'User Created Successfully!'
                }
            }))
            .catch(err => {
                res.send({
                    success: false,
                    error: err,
                    data: {}
                })
            })
    }
}