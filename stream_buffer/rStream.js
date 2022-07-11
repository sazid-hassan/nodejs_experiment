const fs = require("fs");

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {

        res.write(`<html><head><title>Form</title></head>`);
        res.write(
            `<body><form method="post" action="/process"><input name="message" /></form></body>`
        );
        res.end();
    }
    else if (req.url === "/about") {
        res.write("About Page!")
        res.end();
    }
    else if (req.url === "/process" && req.method === "POST") {

        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        })

        req.on('end', () => {
            console.log("Stream Finished");

            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        })
        // console.log(req.data);
        res.write("Process Page!")
        res.end();
    }

    else {
        res.write("Not Found!");
        res.end();
    }
});



server.listen(8000);

console.log("Listening on 8000");

