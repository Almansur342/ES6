const number = [10, 20, 30, 40, 50];
// number.map(num => console.log(num));
number.map((item,index, arr) => {
  console.log("item:", item, "index:", index);
  console.log("item:", item, "index:", index, 'arr', arr)
})