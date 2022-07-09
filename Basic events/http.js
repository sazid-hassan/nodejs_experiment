const http = require('http');
const { Socket } = require('net');

const server = http.createServer((req, res) => {
    res.write("NodeJs Activated");
    res.end();
});

// server.on("connection", () => {
//     console.log("Connection Established");
// })

server.listen(8000);

console.log("Listening on 8000");

module.exports = server;