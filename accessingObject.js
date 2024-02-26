const petOwner = {
  name: "Hero Alom",
  contact:{
    phone: "0987654321",
    email: "dfgh@gmail.com"
  },
  education: {
    schoolName:"andorkali high school",
    subject: [
      {name:'bangla', mark:45},
      {name:'english', mark:64},
      {name:'math', mark:74},
    ]
  },
}

console.log(petOwner.education.subject[1].name)



