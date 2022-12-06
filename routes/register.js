// @ts-check

const express = require('express');
const db = require('../controllers/userController');

const router = express.Router();

// 회원 가입 페이지
router.get('/', (req, res) => {
  res.render('register');
});

// 회원 가입 처리
router.post('/', async (req, res) => {
  const registerResult = await db.registerUser(req.body);
  if (registerResult.status === 'success') {
    res.send('회원가입 성공!<br><a href="/login">로그인 페이지로 이동</a>');
  } else if (registerResult.status === 'duplicated') {
    res.status(400);
    res.send(
      '회원 가입 문제 발생!<br><a href="/register">회원 가입 페이지로 이동</a>',
    );
  } else {
    res.status(500);
    res.send(
      `${registerResult.err}회원 가입 문제 발생!<br><a href="/register">회원 가입 페이지로 이동</a>`,
    );
  }
});
module.exports = router;
