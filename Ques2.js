//2.File System Module

//Reading a File

const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File content:', data);
});


//Output:

/* File content:
 
Blocking code: Blocking code executes line by line, waiting for the current operation to complete before moving to the next one. 

Non-Blocking code: Non-blocking code does not wait; it uses callbacks, promises, or async/await to continue executing other code.
*/

//Writing a File


const fs1 = require('fs');
const content = 'This is a sample content to write in the file.';

fs1.writeFile('output.txt', content, (err) => {
    if (err) {
        console.error('Error writing to the file:', err);
        return;
    }
    console.log('File written successfully!');
});

//OUTPUT:

//File content changed:  "This is a sample content to write in the file."
