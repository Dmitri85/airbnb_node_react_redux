var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cons = require('consolidate');
var passport = require('passport');
var flash = require('connect-flash');

var index = require('./routes/index');
var api = require('./routes/api');

var app = express();

var mySql = require('mysql');
var con = mySql.createConnection({
    host: 'localHost',
    user:'root',
    password: 'dmitririr2904',
    database: 'airbnb'
});

con.connect(function (err){
    if (err) throw err;
    console.log('connected!!!');   
});

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
	secret: 'vidyapathaisalwaysrunning',
	resave: true,
	saveUninitialized: true
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./routes/login')(app, passport);
app.use('/api', api);
app.use('/', index);
app.get("*", function(req, res, next) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
