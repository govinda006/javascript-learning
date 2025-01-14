// //const tinderUser = new Object()

// // const tinderUser = {}

// // tinderUser.name = "Govinda"
// // tinderUser.email = "gpp62000@gmail.com"
// // tinderUser.isLoggedIn = true

// // console.log(tinderUser);

// const regulaUser = {
//   email: "gpp62000@gmail.com",
//   fullname: {
//     userfullname: {
//       userfirstname: "Govinda",
//       usermiddlename: "Prasad",
//       userlastname: "Parida",
//     },
//   },
// };

// console.log(regulaUser.fullname.userfullname);

const obj1 = { key1: "a", key2: "b" };
const obj2 = { key3: "c", key4: "d" };

const obj3 = Object.assign({}, obj1, obj2);

console.log(obj3);
