// Can also be named as Server.js
// This is the root file
const http = require('http');

const express = require('express');

// Create an express application instance
const app = express(); // Pass app as first argument to express constructor, for creating a server

// next is a function that will be passed
app.use((req, res, next) => {
  console.log('In the Middleware!');
  next(); // Allows the request to continue to the next middleware
});

app.use((req, res, next) => {
    console.log('Finished in the Middleware!');
    // ...
    res.send('<h1>Hi from Jieqing!!!!</h1>'); // send response
});

app.listen(3000);

// const server = http.createServer(app);

// // port, hostname, backlog
// server.listen(3000); // will keep listening on requests
