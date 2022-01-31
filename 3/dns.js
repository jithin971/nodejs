const dns = require('dns');  
dns.lookup('www.google.com', (err, addresses) => {  
  console.log('addresses:', addresses);  
});  


dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {  
    console.log(hostname, service);  
      // Prints: localhost  
  });  

  