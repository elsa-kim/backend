//  @ts-check

const mongoose = require('mongoose');


const { MDB_URI } = process.env;

const connect = () => {
  mongoose.connect(
    MDB_URI,
    {
      dbName: 'kdt4',
      useNewUrlParser: true,
    },
    (err) => {
      if (err) {
        console.log('몽고디비 연결 문제 발생', err);
      } else {
        console.log('몽고디비 연결 성공');
      }
    },
  );

  mongoose.connection.on('error', (err) => {
    console.error('몽고디비 문제 발생', err);
  });
  //   연결 끊어지면 끊어졌다는 메세지 뜨고 다시 연결
  mongoose.connection.on('disconnected', () => {
    console.error('몽고디비 연결이 끊어졌습니다. 연결을 다시 시도합니다!');
    connect();
  });
};

module.exports = connect;
