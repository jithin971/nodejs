var express = require('express');
var router = express.Router();
var sql = require("../config/db.js");
const getData = require('../services/getdata.js');
/* GET users listing. */
router.get('/', function (req, res, next) {
    getData().then(
        result => {
            res.send(result)
        }
    )

});

router.post('/', function (req, res, next) {
    let company = req.body.company
    sql.query("insert into company values(?,?)", [null, company], function (err, result) {

        if (err) {
            console.log("error: ", err);
        }
        else {
            console.log(result);
            res.send(result)
        }
    });
});

router.put('/:id', function (req, res, next) {
    let company = req.body.company,
        id = req.params.id
    sql.query("update company value set company_name=? where id=?", [company, id], function (err, result) {

        if (err) {
            console.log("error: ", err);
        }
        else {
            console.log(result);
            res.send(result)
        }
    });
});

router.delete('/:id', function (req, res, next) {
    id = req.params.id
    sql.query("delete from company where id=?", [id], function (err, result) {

        if (err) {
            console.log("error: ", err);
        }
        else {
            console.log(result);
            res.send(result)
        }
    });
});

module.exports = router;
