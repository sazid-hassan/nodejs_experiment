const fs = require('fs');

const rStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
const wStream = fs.createWriteStream(`${__dirname}/out.txt`);

rStream.on('data', (chunk) => {
    wStream.write(chunk);

});



