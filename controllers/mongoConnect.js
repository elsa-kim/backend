//  @ts-check
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MDB_URI;
// 다음과 같ㅣ 쓸  수 있음 const { MDB_URI } = process.env;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
