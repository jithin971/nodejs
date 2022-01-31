// var fs = require("fs");  
// var data = 'A Solution of all Technology';  
// // Create a writable stream  
// var writerStream = fs.createWriteStream('output.txt');  
// // Write the data to stream with encoding to be utf8  
// writerStream.write(data,'UTF8');  
// // Mark the end of file  
// writerStream.end();  
// // Handle stream events --> finish, and error  
// writerStream.on('finish', function() {  
//     console.log("Write completed.");  
// });  
// writerStream.on('error', function(err){  
//    console.log(err.stack);  
// });  
// console.log("Program Ended"); 

var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });