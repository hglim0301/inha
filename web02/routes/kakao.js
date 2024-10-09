var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/book', function(req, res, next) {
  res.render('index', { title: '도서검색', pageName: 'kakao/book.ejs' }); // 페이지 띄우기
});

module.exports = router;
