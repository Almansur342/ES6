const petOwner = {
  name: "Hero Alom",
  contact:{
    phone: "0987654321",
    email: "dfgh@gmail.com"
  },
 
  pet:{
  name:"Lofie",
  info:{
    color: "black",
    weight:"1.2kg"
  },
},
};

console.log(petOwner.pet?.info?.color)