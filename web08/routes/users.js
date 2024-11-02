var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource'); // res.send - 데이터 전송
});

//로그인
router.get('/login', function(req, res, next) {
  res.render('index', { title: '로그인', pageName: 'users/login.ejs' }); // 페이지 띄우기
});

//회원가입
router.get('/join', function(req, res, next) {
  res.render('index', { title: '회원가입', pageName: 'users/join.ejs' }); // 페이지 띄우기
});

//장바구니
router.get('/cart', function(req, res, next) {
  res.render('index', { title: '장바구니', pageName: 'users/cart.ejs' }); // 페이지 띄우기
});

module.exports = router;
