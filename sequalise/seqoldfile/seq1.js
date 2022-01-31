var Sequelize = require('sequelize');
var sequelize = new Sequelize('bike', 'root', 'Welcome@123', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

var User = sequelize.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
});

// sequelize.sync().then(function () {
//     return User.create({
//         username: 'janedoe',
//         birthday: new Date(1980, 6, 20)
//     });
// }).then(function (jane) {
//     console.log(jane.get({
//         plain: true
//     }));
// });

// User.findAll().then(function (users) {
//     console.log(users)
// })

//   User.findOne().then(function (user) {
//     console.log(user.get('username'));
// });

//   User.findOne({ where: {id: 1} , attributes: ['id','username', 'birthday']}).then(function (user) {
//     console.log(user.get());
// });


// User.findAll({ where:{ id: [1,2] }}).then(function (user) {
//     console.log(JSON.stringify(user));
// });

// User.findAll({ limit: 10, sort: ['username', 'descending']}).then(function (user) {
//         console.log(JSON.stringify(user));
//     });