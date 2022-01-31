var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    /*Use the url module to turn the querystring into an object:*/
    var q = url.parse(req.url, true).query;
    /*Return the year and month from the query object:*/
    var txt = q.firstname + " " + q.lastname + " " + q.age
    //http://localhost:8080/?firstname=jithin&age=34&lastname=raju

    // var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
    // console.log(qdata.firstname); //returns 'february'
    res.end(txt);
}).listen(8080);
