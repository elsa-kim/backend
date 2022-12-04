// @ts-check

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const indexRouter = require('./routes');
const userRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const boardRouter = require('./routes/board');
const dataRouter = require('./routes/data');
const dbBoardRouter = require('./routes/dbBoard');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

const app = express();
const { PORT } = process.env;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('sh'));
app.use(
  session({
    secret: 'sh',
    resave: false,
    saveUninitialized: true,
  }),
);

// localhost:4000
app.use('/', indexRouter);
// localhost:4000/users
app.use('/users', userRouter);
// localhost:4000/posts
app.use('/posts', postsRouter);
// localhost:4000/board
app.use('/board', boardRouter);
// localhost:4000/data
app.use('/data', dataRouter);
app.use('/dbBoard', dbBoardRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

// 에러 핸들링은 미들웨어에서 마지막에 제어를 해줘야 함
// 여긴 프론트에게 에러를 전달할때 각 미들웨어에서 처리해준 에러만 보여지게 처리
app.use((err, req, res, next) => {
  // 개발자가 볼 에러 내역
  console.log(err.stack);
  // 내가 만든 error.statusCode가 없으면 500(server error)
  // 예상치 못한/내가 처리하지 못하는 에러가 발생할 경우엔 500
  // -> 어디서 에러가 발생했는지 조금 더 도움이 된다
  res.status(err.statusCode || 500);
  res.send(err.message);
});

// localhost:4000 PORT
app.listen(PORT, () => {
  console.log(`서버는 현재 ${PORT}번 포트에서 실행 중입니다.`);
});
