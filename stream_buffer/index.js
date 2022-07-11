const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res) => {
    const readData = fs.createReadStream(__dirname + '/bigdata.txt', 'utf-8');
    readData.pipe(res);
})


server.listen(3100);

console.log("Listening at 31000");
