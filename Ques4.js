//4.DNS Module

const dns = require('dns');

dns.lookup('example.com', (err, address, family) => {
    if (err) console.error(err);
    console.log('IP Address:', address);
    console.log('Address Family:', family);
});

//OUTPUT:

/*
IP Address: 2606:2800:21f:cb07:6820:80da:af6b:8b2c
Address Family: 6
*/