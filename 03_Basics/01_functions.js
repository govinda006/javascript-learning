// // function sayMyName() {
// //   console.log("G");
// //   console.log("O");
// //   console.log("V");
// //   console.log("I");
// //   console.log("N");
// //   console.log("D");
// //   console.log("A");
// // }
// // sayMyName();

// // function addTwoNumbers(number1, number2 /* parameters */) {
// //   console.log(number1 + number2);
// // }
// function addTwoNumbers(number1, number2) {
//   let results = number1 + number2;
//   return results;
// }
// const results = addTwoNumbers(4, 5);
// console.log("Results:", results);

// function userLoginMessage(username) {
//   if (username === undefined) {
//     console.log("Please enter the user name");
//     return;
//   }
//   return `${username} just logged in`;
// }

// console.log(userLoginMessage());

// function calculateCartPrice(...num1) {
//   return num1;
// }

// console.log(calculateCartPrice(200, 300, 400));

const user = {
  username: "Govinda",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `User name is ${anyObject.username} and price is ${anyObject.price}`
  );
}

handleObject(user);

const myNewArray = [200, 300, 400, 500];

function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500]));
