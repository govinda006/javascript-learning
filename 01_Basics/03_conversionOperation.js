let score = "33abcd";

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.table([
  isLoggedIn,
  typeof isLoggedIn,
  booleanIsLoggedIn,
  typeof booleanIsLoggedIn,
]);

//

let someNumber = 33;

let stringNumber = String(someNumber);

console.table([
  someNumber,
  typeof someNumber,
  stringNumber,
  typeof stringNumber,
]);
