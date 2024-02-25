// const number = [10, 20, 30, 40, 50];
// for(num of number){
//   console.log(num);
// }
// number.forEach(num => {
//   console.log(num)
// })
// number.forEach(num => console.log(num)
// )
// const a = number.forEach(num => num);
// console.log(a)
// const b = number.map(num => num + 1);
// console.log(number)
// console.log(b)

// const number = [10, 20, 30, 40, 50];
// const x = number.find(num => num === 30);
// console.log(x);

// const number = [10, 21, 30, 41, 50, 61];
// const x = number.filter(num => num % 2 === 0);
// console.log(x)

const number = [10, 21, 30, 41, 50, 61];

// const sum = number.reduce((preValue, currentValue) => {
//  return preValue + currentValue;
// }, 0);

const sum = number.reduce((x, y) => x + y, 0);
const sum1 = number.reduce((x, y) => x * y, 1);
console.log(sum, sum1)