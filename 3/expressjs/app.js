var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const Sequelize = require('sequelize');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});




const path2 = 'mysql://root:Welcome@123@127.0.0.1:3306/testdb';
const sequelize = new Sequelize(path2, { operatorsAliases: false });

// sequelize.authenticate().then(() => {
//   console.log('Connection established successfully.');
// }).catch(err => {
//   console.error('Unable to connect to the database:', err);
// }).finally(() => {
//   sequelize.close();
// });

// let Dummy = sequelize.define('dummy', {
//   description: Sequelize.STRING
// });

// Dummy.sync().then(() => {
//   console.log('New table created');
// }).finally(() => {
//   sequelize.close();
// })

// let Dummy = sequelize.define('dummy', {
//   description: Sequelize.STRING
// });

// sequelize.sync({force: true}).then(() => {

//   Dummy.create({ description: 'test 1' }).then(() => {
//       console.log('table created');
//   }).finally(() => {
//       sequelize.close();
//   });
// });

// let Note = sequelize.define('notes', {
//   description: Sequelize.STRING
// });

// let notes = [
//   { description: 'Tai chi in the morning' },
//   { description: 'Visited friend' },
//   { description: 'Went to cinema' },
//   { description: 'Listened to music' },
//   { description: 'Watched TV all day' },
//   { description: 'Walked for a hour' },
// ];

// sequelize.sync({ force: true }).then(() => {
//   Note.bulkCreate(notes, { validate: true }).then(() => {
//       console.log('notes created');
//   }).catch((err) => {
//       console.log('failed to create notes');
//       console.log(err);
//   }).finally(() => {
//       sequelize.close();
//   });
// });
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
