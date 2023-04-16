const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  // action: the path where the request will be sent
  res.sendFile(path.join(rootDir, 'views', 'add-product.html')); // send response
});

// By default, request does not parse the body, need to register a parser
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router; // export the router object 
