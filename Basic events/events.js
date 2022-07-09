const School = require('./school');

const Server = require("./http");

const school = new School();

// register a listener for bellRing event
school.on('bellRing', ({ period, text }) => {
    console.log(`We need to run because ${period} ${text}`);
});

school.startPeriod();