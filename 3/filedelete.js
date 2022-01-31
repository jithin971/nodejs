var fs = require('fs');

fs.unlink('mynewfile3.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});