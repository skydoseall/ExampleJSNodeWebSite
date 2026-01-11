const http = require('http');
console.log('Hello, World!');
console.log('This is the index.js file.');


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello, World!</h1>');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});