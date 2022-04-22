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
// let user = {
//   name: "Mike",
//   friend: ["John", "Paul", "Jimmy"],
//   families: [
//     { name: "David", age: 20 },
//     { name: "Ava", age: 25 },
//   ],
//   location: {
//     region: "England",
//     country: "United Kingdom",
//   },
//   aboutMe: {
//     status: "Single",
//     pet: "Dog",
//   },
// };
// let {
//   aboutMe,
//   location: { region: region2, country },
//   friend: [friend1],
//   families: [David, { age: age2 }],
// } = user;
// console.log(aboutMe);
// console.log(friend1);
// console.log(region2);
// console.log(David);
// console.log(age2);

// let citiesState = {
//     iran : ['tehran','sari','tabriz','ahvaz'],
//     england : ['london','manchester','liverpool'],
//     spain: ['madrid','barcelon','pompluna','sevill']
// }
// function createStates(newObj){
//     citiesState = {...citiesState,...newObj};
//     console.log(citiesState);
// }
// let newObj = {france: ['paris']};
// createStates(newObj);

// function addCityState(cityName, key){
//     citiesState[key] = [...citiesState[key], cityName];
//     console.log(citiesState);
// }
// addCityState('karaj','iran');

// function addCitysToState(key, cities){
//     citiesState[key] = [...citiesState[key], ...cities];
//     console.log(citiesState);
// }
// let cities = ['kerman', 'shiraz'];
// addCitysToState('iran',cities);

// function joinLists(arr){
//     let newArr = [];
//     arr.forEach(item => {
//         console.log([...newArr]);
//         newArr = [...newArr, ...item];
//     })
//     console.log(newArr);
// }

// matrix = [[2], [4, 6], [78, 76, 25]];
// joinLists(matrix);

// const users = [
//     {name: "ali",
//       addresses: ["edatalat"],
//       phones: [09019856491]
//     },
//     { name: "reza",
//     addresses: ["taleghani"],
//     phones: [0911111111]
//     },
// ];
// let copiedUsers = JSON.parse(JSON.stringify(users));
// copiedUsers[0].name = "fateme";
// console.log('copiedUsers:');
// console.log(copiedUsers);

// console.log('users:');
// console.log(users);

function countProperties(obj) {
//   let count = 0;
//   for (let key in obj) {
//     count++;
//   }

    let keys = Object.keys(obj);
    let count = keys.length;
    console.log(count);
    
}
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

countProperties(user);
