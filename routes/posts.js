const express = require('express');

const router = express.Router();

const POSTS = [];

router.get('/', (req, res) => {
  res.render('posts', { POSTS, postContents: POSTS.length });
});

router.get('/list', (req, res) => {
  res.send(POSTS);
});

router.post('/', (req, res) => {
  if (Object.values(req.body).every((val) => val)) {
    POSTS.push(req.body);
    res.redirect('/posts');
  } else {
    const err = new Error('Unexpected Body!!');
    err.statusCode = 404;
    throw err;
  }
});

// 포스트 삭제
router.delete('/:title', (req, res) => {
  const foundIdx = POSTS.findIndex((posts) => posts.title === req.params.title);

  if (foundIdx !== -1) {
    POSTS.splice(foundIdx, 1);
    console.log(POSTS);
    res.send('post 삭제 완료!');
  } else {
    const err = new Error('Unexpected Query!');
    err.statusCode = 404;
    throw err;
  }
});

module.exports = router;
