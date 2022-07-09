const http = require('http');
const { Socket } = require('net');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("NodeJs Activated");
        res.end();
    }
    else if (req.url === "/about") {
        res.write("About Page!")
        res.end();
    }
    else {
        res.write("Not Found!");
        res.end();
    }
});

// server.on("connection", () => {
//     console.log("Connection Established");
// })

server.listen(8000);

console.log("Listening on 8000");

module.exports = server;