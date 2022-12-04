//  @ts-check

export const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function sumAll() {
  // for
  //   for (let i = 0; i < arr.length; i++) {
  //     let sum = 0;
  //     sum += arr[i];
  //   }
  //   return sum;

  //   메소드
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum;
}
