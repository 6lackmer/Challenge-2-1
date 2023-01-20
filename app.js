var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var registerRouter = require('./routes/register');
var loginUserRouter = require('./routes/loginuser');
var internalTransferRouter = require('./routes/internaltransfer');
var externalTransferRouter = require('./routes/externaltransfer');
var checkingTransfersRouter = require('./routes/checkingtransfers');
var savingsTransfersRouter = require('./routes/savingstransfer');
var changePasswordRouter = require('./routes/changepassword');
var customerSearchRouter = require('./routes/customersearch');
var accountSearchRouter = require('./routes/accountsearch');
var changeCustomerPasswordRouter = require('./routes/changecustomerpassword');
var homeRouter = require('./routes/home');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, "node_modules/bootstrap/dist/")));
app.use(express.static(path.join(__dirname, "node_modules/bootstrap-icons/"))); // Need these for bootstrap

app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/loginuser', loginUserRouter);
app.use('/internaltransfer', internalTransferRouter);
app.use('/externaltransfer', externalTransferRouter);
app.use('/checkingtransfers', checkingTransfersRouter);
app.use('/savingstransfer', savingsTransfersRouter);
app.use('/changepassword', changePasswordRouter);
app.use('/customersearch', customerSearchRouter);
app.use('/accountsearch', accountSearchRouter);
app.use('/changecustomerpassword', changeCustomerPasswordRouter);
app.use('/home', homeRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
