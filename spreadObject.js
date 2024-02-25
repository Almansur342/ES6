const person = {
  name:"Hero Alom",
  age : 34,
  phone : "0987654321",
  address: "Bari nai",
  location :{
    zila: "Moulvibazar",
    city: 'sadar'
  },
  p:[1, 2, 3, 4, 5]
}
// const person1 = {...person};
// person1.email = "gmail.cosm"
// console.log(person)
// console.log(person1)

// const {phone, address, p, location} = person;
// const {phone, address, name: amarNam} = person;
// console.log(phone);
// console.log(address, p);
// const{zila, city} = location;
// console.log(zila, city);
// console.log(amarNam);

// const {name, ...rest} = person;
// console.log(name);
// console.log(rest);
const {location:{city}} = person;
// console.log(location)
console.log(city)