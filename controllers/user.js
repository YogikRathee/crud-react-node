const User = require('../models/user'),
    passwordHash = require('password-hash');

module.exports = {
    create: (req, res) => {
        return User
            .create({ ...req.body, password: passwordHash.generate(req.body.password) })
            .then(result => {
                res.send({
                    success: true,
                    error: null,
                    data: {
                        message: 'User Created Successfully',
                        name: result.name
                    }
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
    read: (req, res) => {
        return User
            .find({ email: { $ne: req.user.result }})
            .then(result => {
                res.send({
                    success: true,
                    error: null,
                    data: {
                        users: result
                    }
                })
            })
            .catch(err => {
                res.send({
                    success: true,
                    error: err,
                    data: {}
                })
            })
    },
    update: (req, res) => {
        return User
            .findByIdAndUpdate(req.body.id, req.body.updates)
            .then(result => {
                res.send({
                    success: true,
                    error: null,
                    data: {
                        message: "User updated successfully!",
                    }
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
    delete: (req, res) => {
        return User
            .findByIdAndRemove(req.body.id)
            .then(result => {
                res.send({
                    success: true,
                    error: null,
                    data: {
                        message: "User deleted successfully!",
                        name: result.name
                    }
            })
            .catch(err => {
                res.send({
                    success: false,
                    error: err,
                    data: {}
                })
            })
        })
    }
}