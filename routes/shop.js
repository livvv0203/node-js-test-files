const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>Hi from Jieqing!!</h1>'); // send response
  });
  
module.exports = router;


