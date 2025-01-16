// //if

// const isUserLoggedIn = true;

// if (2 != 3) {
//   // code execute
//   // console.log("True");
// } else {
//   console.log("Not the same datetypes");
// }

// if (false) {
//   //code doesn't execute
// }

// const balance = 10000;

// if (balance < 5000) {
//   console.log("less than 5000");
// } else if (balance < 7500) {
//   console.log("less than 7500");
// } else {
//   console.log("less than 12000");
// }

const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (isUserLoggedIn && debitCard && 2 == 2) {
  console.log("allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("user logged in");
}
