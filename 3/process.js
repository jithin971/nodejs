console.log(process.argv)

console.log(process.execPath);

// Platform Information 
console.log(process.platform);

// Print the current directory
console.log('Current directory: ' + process.cwd());

// Print the process version
console.log('Current version: ' + process.version);

// Print the memory usage
console.log(process.memoryUsage());

console.log(process.config);

process.argv.forEach((value, index, array) => {  
    console.log(`${index}: ${value}`);  
  });  