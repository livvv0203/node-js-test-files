const express = require('express');
const router = express.Router();
// This package can detect the operation system and build the path to the routes
const path = require('path');
const rootDir = require('../util/path');

router.get('/', (req, res, next) => {
  // res.send('<h1>Hi from Jieqing!!</h1>'); // send response
  res.sendFile(path.join(rootDir, 'views', 'shop.html')); // Up on level and navigate the file
});

module.exports = router;
