// Can also be named as Server.js
// This is the root file
const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);

// port, hostname, backlog
server.listen(3003); // will keep listening on requests