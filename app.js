// Can also be named as Server.js
// This is the root file
// const http = require('http')；

// Using express.js
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const clientRoutes = require('./routes/shop');
const path = require('path');

// Create an express application instance
const app = express(); // Pass app as first argument to express constructor, for creating a server

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin', adminRoutes);
app.use(clientRoutes);

// Handle 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
