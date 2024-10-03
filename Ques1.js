//1.Blocking and Non-Blocking

// Blocking code
const fs = require('fs');
let data = fs.readFileSync('example.txt', 'utf8'); // Blocks here until file is read
console.log(data); // Prints after file reading is done
console.log('This prints After the file content due to blocking nature.');



//OUTPUT:

/* Blocking code: Blocking code executes line by line, waiting for the current operation to complete before moving to the next one. 

Non-Blocking code: Non-blocking code does not wait; it uses callbacks, promises, or async/await to continue executing other code.

This prints After the file content due to blocking nature.*/



// Non-blocking code
const fs1 = require('fs');
fs1.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
console.log('This prints before the file content due to non-blocking nature.');


// Output:

/*This prints before the file content due to non-blocking nature.

Blocking code: Blocking code executes line by line, waiting for the current operation to complete before moving to the next one. 

Non-Blocking code: Non-blocking code does not wait; it uses callbacks, promises, or async/await to continue executing other code.
*/