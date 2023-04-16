const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  // action: the path where the request will be sent
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"></input><button type="submit">Add Product</button></form>'
  ); // send response
});

// By default, request does not parse the body, need to register a parser
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router; // export the router object
