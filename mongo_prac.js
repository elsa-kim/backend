//  @ts-check

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri =
  'mongodb+srv://sohyun:1236@cluster0.k9iy3rj.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function main() {
  await client.connect();
  const member = client.db('kdt4').collection('member');
  const deleteResult = await member.deleteMany({});
  if (!deleteResult.acknowledged) throw new Error('삭제 이상');
  const insertResult = await member.insertMany([
    {
      id: 'tetz',
      name: '이효석',
      isMarried: false,
      age: 38,
    },
    { id: 'eric', name: '김성재', isMarried: true, age: 38 },
    { id: 'ailee', name: '이재연', isMarried: false, age: 35 },
    { id: 'alex', name: '하승호', isMarried: false, age: 34 },
    { id: 'uncle', name: '박동희', isMarried: true, age: 38 },
  ]);

  if (!insertResult.acknowledged) throw new Error('삽입 이상');

  //   데이터 하나 추가
  const insertOneResult = await member.insertOne({
    id: 'ted',
    name: '방성민',
    isMarried: false,
    age: 37,
  });
  if (!insertOneResult.acknowledged) throw new Error('삽입 이상');

  //   id ted인 값 결혼 여부 true로 수정
  const updateOneResult = await member.updateOne(
    { id: 'ted' },
    { $set: { isMarried: true } },
  );
  if (!updateOneResult.acknowledged) throw new Error('수정 이상');

  //   모든 데이터에 현재 날짜 들어가게
  const updateManyResult = await member.updateMany(
    {},
    { $set: { updateTime: new Date(Date.now()) } },
  );
  if (!updateManyResult.acknowledged) throw new Error('수정 이상');

  //   전체 데이터 출력 코드
  const data = await member.find({}).toArray();
  console.log(data);

  //   데아터 하나만 출력하는 코드
  //   const data = await member.findOne({ id: 'ted' });
  //   console.log(data);

  //   조건 둘다 만족하는 값 출력 코드
  //   const findCursor = member.find({
  //     $and: [{ age: { $gte: 38 } }, { isMarried: true }],
  //   });
  //   const data = await findCursor.toArray();
  //   console.log(data);

  //   조건 둘 중 하나라도 만족하는 값 출력 코드
  //   const findCursor = member.find({
  //     $or: [{ age: { $lte: 36 } }, { isMarried: true }],
  //   });
  //   const data = await findCursor.toArray();
  //   console.log(data);

  client.close();
}

main();
