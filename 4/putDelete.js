var express = require('express');
var app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json())


app.put('/putData/:id', function(req, res){
   console.log("asd",req.body)
   res.send("You just called the post method at '/hello'!\n"+req.params.id);
});

app.delete('/deleteData/:id', function(req, res){

    res.send("You just called the post method at '/hello'!\n");
 });


app.listen(3500);