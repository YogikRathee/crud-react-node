const createError = require('http-errors'),
  express = require('express'),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  cors = require('cors'),
  secret = process.env.SECRET;

const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./models/user');
require('./routes/auth')(app);

app.use((req, res, next) => {
  header_auth_token = req.headers['authorization'] ? req.headers['authorization'].split(' ')[1] : null
  var token = req.body.token || req.query.token || req.headers['x-access-token'] || header_auth_token;
  if (token) {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({ success: false, message: 'Failed to authenticate token.' });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send({
      success: false,
      message: 'Not Authorized'
    });

  }
})

require('./routes/users')(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
