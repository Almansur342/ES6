let x = 5;
let y = [1, 2, 3];
// const modify = (a) => {
//   a = a + 50;
//   console.log(a)
// }

const modify = (a) =>{
  a.push(22);
  console.log(a);
} 

modify(y);
console.log(y)