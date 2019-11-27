const UserController = require('../controllers').User

module.exports = app => {
  app.post('/user/create', UserController.create)
  app.get('/user/read', UserController.read)
  app.patch('/user/update', UserController.update)
  app.delete('/user/delete', UserController.delete)
}