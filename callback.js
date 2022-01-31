// function getDetails(cb) {
//   for(i=0;i<10;i++){
//       cb(i)
//   }
// }

// getDetails(function callback(data) {
//     console.log(data)
// })

var mark1 = 30
var mark2 = 40
var mark3 = 50
var total = 0
function totalmark(cb) {
    setTimeout(function () {
        total = mark1 + mark2 + mark3
        cb(total)
    }, 2000)

}

function persentage() {

    totalmark(function (data) {
        console.log(data / 3)
    })

}

// totalmark();
persentage();
