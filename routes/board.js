// @ts-check

const express = require('express');

const router = express.Router();

const ARTICLE = [
  {
    title: 'title1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum porro eum animi consequatur dignissimos, id vero alias ex, voluptas ipsa. Provident, quibusdam rem perferendis ratione doloremque commodi blanditiis possimus.',
  },
  {
    title: 'title2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum porro eum animi consequatur dignissimos, id vero alias ex, voluptas ipsa. Provident, quibusdam rem perferendis ratione doloremque commodi blanditiis possimus.',
  },
];
// 글 전체 목록을 보여주는 패이지 렌더링
router.get('/', (req, res) => {
  const articleLen = ARTICLE.length;
  res.render('board', { ARTICLE, articleCounts: articleLen });
});

// 글 쓰기 모드 페이지로 이동
router.get('/write', (req, res) => {
  res.render('board_write');
});

// 글 추가 기능 수행
router.post('/write', (req, res) => {
  //   if (Object.values(req.body).every((val) => val)) {
  //     ARTICLE.push(req.body);
  //     res.redirect('/board');
  //   } else {
  //     const err = new Error('Unexpected Body!!');
  //     err.statusCode = 404;
  //     throw err;
  //   }
  if (req.body.title && req.body.content) {
    const newArticle = {
      title: req.body.title,
      content: req.body.content,
    };
    ARTICLE.push(newArticle);
    res.redirect('/board');
  } else {
    const err = new Error('데이터를 정확히 입력하세요!');
    err.statusCode = 400;
    throw err;
  }
});

// 글 수정 모드 페이지로 이동
router.get('/modify/:title', (req, res) => {
  const arrIndex = ARTICLE.findIndex(
    (_article) => _article.title === req.params.title
  );
  const selectedArticle = ARTICLE[arrIndex];
  res.render('board_modify', { selectedArticle });
});

// 글 수정
router.post('/modify/:title', (req, res) => {
  if (req.body.title && req.body.content) {
    const arrIndex = ARTICLE.findIndex(
      (_article) => _article.title === req.params.title
    );
    ARTICLE[arrIndex].title = req.body.title;
    ARTICLE[arrIndex].content = req.body.content;
    res.redirect('/board');
  } else {
    const err = new Error('요청 데이터 이상');
    err.statusCode = 400;
    throw err;
  }
});

// 글 삭제
router.delete('/delete/:title', (req, res) => {
  const arrIndex = ARTICLE.findIndex(
    (_article) => _article.title === req.params.title
  );
  if (arrIndex !== -1) {
    ARTICLE.splice(arrIndex, 1);
    res.send('삭제완료');
  } else {
    const err = new Error('해당 제목을 가진 글이 없습니다');
    err.statusCode = 404;
    throw err;
  }
});

module.exports = router;
