//  @ts-check

// const animals = require('./animals');

// console.log(animals);
// console.log(animals.animals);
// animals.showAnimals();

// or

// const { animals, showAnimals } = require('./animals');

// console.log(animals);
// showAnimals();

// const { animals, showAnimals, showAnimalsByMap } = require('./animals');

// console.log(animals);
// showAnimals();
// showAnimalsByMap();

// 실습
// const calc = require('./calc');

// console.log(calc.arr);
// console.log(calc.sumAll());

// es6

// import { animals, showAnimals } from './animals.js';

// console.log(animals);
// showAnimals();

// or

// import * as animals from './animals.js';
// console.log(animals);
// animals.showAnimals();

// or

// import, export 할 때 다 as로 이름 바꿔서 가능
// import { animals as ani, showAnimals as show } from './animals.js';
// console.log(ani);
// show();

//  ////////
// import Animal from './animals.js';

// const ani = new Animal();
// console.log(ani.animals);
// ani.showAnimals();

import { arr, sumAll } from './calc.js';
console.log(arr);
console.log(sumAll());
