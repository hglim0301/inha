var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource'); // res.send - 데이터 전송
});

module.exports = router;
