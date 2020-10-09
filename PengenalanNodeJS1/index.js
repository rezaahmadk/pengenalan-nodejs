const http = require('http');
const moment = require('moment');

const server = http.createServer((req, res) => {
    const currentDate = moment().format('llll');
    res.end(currentDate);
})

server.listen(8000);
console.log("Server running on port 8000");