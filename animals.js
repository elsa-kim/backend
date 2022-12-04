//  @ts-check

// const animals = ['dog', 'cat', 'chicken'];

// function showAnimals() {
//   // 배열 함수를 사용하지 X
//   for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
//   }

//   //   배열 함수 쓰는 버전
//   animals.map((value) => console.log(value));
// }

// module.exports = {
//   animals,
//   showAnimals,
// };

// or

// exports.animals = animals;

// exports.showAnimals = () => {
//   animals.map((value) => console.log(value));
// };

// const animals = {
//   animals: ['dog', 'cat', 'chicken'],
//   showAnimals() {
//     console.log(this.animals);
//   },
//   showAnimalsByMap() {
//     this.animals.map((value) => console.log(value));
//   },
// };

// // this : 자신이 소속된 객체 가리킴, 화살표 함수 안에서 사용 불가

// module.exports = animals;

// es6 방식

// export const animals = ['dog', 'cat', 'chicken'];

// export function showAnimals() {
//   animals.map((value) => console.log(value));
// }

//  or

// const animals = ['dog', 'cat', 'chicken'];

// function showAnimals() {
//   animals.map((value) => console.log(value));
// }
// export { animals, showAnimals };

// ////////

export default class Animal {
  constructor() {
    this.animals = ['dog', 'cat', 'chicken'];
  }

  showAnimals() {
    this.animals.map((value) => console.log(value));
  }
}
