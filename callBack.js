 function show(name, age){
  console.log("my first name is ", name, "my age is ", age);
 }

 function fun1(name ,age, callback){
  console.log("hello from fisrt function");
  setTimeout(() =>{
    callback(name, age)
  },2000)

 }
 fun1("mahed", 23, show)