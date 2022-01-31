var sql = require("../config/db.js")
var hotel = {}
hotel.getData = () => {
    return new Promise((resolve, reject) => {
        sql.query("select * from company", function (err, res) {
            if (err) {
                reject(err)
            }
            resolve(res)
        }

        )
    }
    )

}

hotel.postData = () => {
    return new Promise((resolve, reject) => {
        sql.query("select * from company", function (err, res) {
            if (err) {
                reject(err)
            }
            resolve(res)
        }

        )
    }
    )
}
module.exports = hotel