var express = require('Express');
var app = express();

var things = require('./task.js');

//both index.js and things.js should be in same directory
app.use('/task', things);

app.listen(3500);