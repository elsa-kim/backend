// @ts-check

const express = require('express');

const router = express.Router();

const USER = [
  {
    id: 'tetz',
    name: '효석',
    email: '',
  },
  {
    id: 'kimi',
    name: '기원',
    email: '',
  },
];

// EJS 사용파트
// localhost:4000/users/
router.get('/', (req, res) => {
  res.render('users', { USER, userCounts: USER.length });
});

// 유저 라우터, 전체 회원 목록 조회
// localhost:4000/users/list
router.get('/list', (req, res) => {
  res.send(USER);
});

// 특정 ID를 가진 회원 정보 조회
router.get('/id/:id', (req, res) => {
  const findUser = USER.find((user) => {
    console.log(user);
    return user.id === req.params.id;
  });
  if (findUser) {
    res.send(findUser);
  } else {
    const err = new Error('ID를 찾을 수 없습니다!');
    err.statusCode = 404; // 에러에 404 status code 저장
    throw err;
  }
});

//  새로운 회원 등록
router.post('/', (req, res) => {
  if (Object.keys(req.query).length > 0) {
    if (req.query.id && req.query.name && req.query.email) {
      const newUser = {
        id: req.query.id,
        name: req.query.name,
        email: req.query.email,
      };
      USER.push(newUser);
      res.send('회원 등록 완료!');
    } else {
      const err = new Error('Unexpected Query!');
      err.statusCode = 404;
      throw err;
    }
  } else if (req.body) {
    if (req.body.id && req.body.name && req.body.email) {
      const newUser = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
      };
      USER.push(newUser);
      res.redirect('/users');
    } else {
      const err = new Error('Unexpected Query!');
      err.statusCode = 404;
      throw err;
    }
  } else {
    const err = new Error('no data');
    err.statusCode = 404;
    throw err;
  }
});

// 회원 수정
router.put('/:id', (req, res) => {
  if (req.query.id && req.query.name && req.query.email) {
    const foundIdx = USER.findIndex((user) => user.id === req.params.id);

    if (foundIdx !== -1) {
      const modifiedUser = {
        id: req.query.id,
        name: req.query.name,
        email: req.query.email,
      };

      USER[foundIdx] = modifiedUser;

      res.send('회원 수정 완료!');
    } else {
      const err = new Error('Unexpected Query!');
      err.statusCode = 404;
      throw err;
    }
  }
});

// 회원 삭제
router.delete('/:id', (req, res) => {
  const foundIdx = USER.findIndex((user) => user.id === req.params.id);

  if (foundIdx !== -1) {
    USER.splice(foundIdx, 1);
    console.log(USER);
    res.send('회원 삭제 완료!');
  } else {
    const err = new Error('Unexpected Query!');
    err.statusCode = 404;
    throw err;
  }
});

module.exports = router;
