var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/book', function(req, res, next) {
  res.render('index', { title: '도서검색', pageName: 'kakao/book.ejs' }); // 페이지 띄우기
});

// 지역 검색
router.get('/local', function(req, res, next) {
  // res.send("TLQKF");
  res.render('index', { title: '지역검색', pageName: 'kakao/local.ejs' }); // 페이지 띄우기
});

//블로그 검색
router.get('/blog', function(req, res, next) {
  res.render('index', { title: '블로그검색', pageName: 'kakao/blog.ejs' }); // 페이지 띄우기
});

//도서정보 페이지
router.get('/book/info', function(req, res, next) {
  const title=req.query.title;
  const thumbnail=req.query.thumbnail;
  const price=req.query.price;
  const authors=req.query.authors;
  const publisher=req.query.publisher;
  const isbn=req.query.isbn;
  const contents=req.query.contents;

  const info = {title, thumbnail, price, authors, publisher, isbn, contents};
  res.render('index', { title: '도서정보', pageName: 'kakao/book_info.ejs', info}); // 페이지 띄우기
});

module.exports = router;
