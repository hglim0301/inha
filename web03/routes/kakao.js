var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/book', function(req, res, next) {
  res.render('index', { title: '도서검색', pageName: 'kakao/book.ejs' }); // 페이지 띄우기
});

router.get('/local', function(req, res, next) {
  // res.send("TLQKF");
  res.render('index', { title: '지역검색', pageName: 'kakao/local.ejs' }); // 페이지 띄우기
});

router.get('/blog', function(req, res, next) {
  res.render('index', { title: '블로그검색', pageName: 'kakao/blog.ejs' }); // 페이지 띄우기
});

module.exports = router;
