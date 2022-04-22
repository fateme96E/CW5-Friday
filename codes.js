/*
let user = {
name: 'Mike',
friend: ["John", "Paul", "Jimmy"],
families:[{name:"David", age:20} , {name:"Ava", age:25}],
location: {
region:"England",
country:"United Kingdom"
},
aboutMe: {
status: "Single",
pet: "Dog",
}
}


Try to get ‘aboutMe’ using Destructuring assignment
Try to get ‘region’ and change name to ‘region2’ using Destructuring assignment
Try to get ‘John’ using Destructuring assignment
Try to get ‘David’ and get Ava`s age using Destructuring assignmen
*/
let user = {
  name: "Mike",
  friend: ["John", "Paul", "Jimmy"],
  families: [
    { name: "David", age: 20 },
    { name: "Ava", age: 25 },
  ],
  location: {
    region: "England",
    country: "United Kingdom",
  },
  aboutMe: {
    status: "Single",
    pet: "Dog",
  },
};
let {
  aboutMe,
  location: { region: region2, country },
  friend: [friend1],
  families: [David, { age: age2 }],
} = user;
console.log(aboutMe);
console.log(friend1);
console.log(region2);
console.log(David);
console.log(age2);





