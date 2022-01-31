var exp = require('express');
var app = exp();
var sql = require("./db.js")

app.get('/getall', function (req, res) {
    sql.query("select * from notes", function (err, result) {

        if (err) {
            console.log("error: ", err);
        }
        else {
            console.log(result);
            res.send(result)
        }
    });

})



app.listen(3500)