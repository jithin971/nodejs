console.log(__dirname);   
console.log(__filename);   
buf = new Buffer(256);  
len = buf.write("Simply Easy Learning");  
console.log("Octets written : "+  len);  