var express = require('Express');
var app = express();
var router = express.Router();

router.get('/', function(req, res){
    res.send('GET route on things.');
 });
 router.post('/', function(req, res){
    res.send('POST route on things.');
 });

//both index.js and things.js should be in same directory
app.use('/things', router);

app.listen(3500);