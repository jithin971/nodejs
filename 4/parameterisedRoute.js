var express = require('express');
var app = express();

app.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});
app.get('/employee/:name/:id', function(req, res) {
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
 });
 app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
 });
app.listen(3500);