const http = require('http');
const { parse } = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        // Handle post info...
        console.log("entra");
    }
}