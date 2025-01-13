const accounId = 190128;
let accountEmail = "govinda@gmail.com";
var accountPassword = "12345";
accountCity = "Bengaluru";
let accountState;

/*

prefer not to use var
because of issue in block scope and function scope
instade use let

*/

// accounId = 123456 // not allowed
accountEmail = "chigul@gmail.com"; // allowed
accountPassword = "1234567890"; // allowed
accountCity = "Cuttack"; // allowed

console.table([
  accounId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
