var express = require('express');
var router = express.Router();
const getData = require('../services/getdata.js');
/* GET users listing. */
router.get('/', function (req, res, next) {
    getData.postData().then(
        result => { 
            res.send(result)
        }
    )

});
module.exports = router