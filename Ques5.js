// 5. TCP Server and TCP Client

//TCP server

const net = require('net');

const server = net.createServer((socket) => {
    console.log('Client connected');
    socket.on('data', (data) => {
        console.log('Received:', data.toString());
    });
    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

server.listen(8080, () => {
    console.log('Server listening on port 8080');
});

//OUTPUT:

/* Server listening on port 8080
Client connected
Received: GET / HTTP/1.1
Host: localhost:8080
Connection: keep-alive
sec-ch-ua: "Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*//*;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: none
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: en-IN,en;q=0.9,ta;q=0.8

*/

//TCP Client

const net = require('net');

const client = net.createConnection({ port: 8080 }, () => {
    console.log('Connected to server');
    client.write('Hello Server!');
});

client.on('data', (data) => {
    console.log('Server says:', data.toString());
    client.end();
});
