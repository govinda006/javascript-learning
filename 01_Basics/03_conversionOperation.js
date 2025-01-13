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


let value = 3
let negValue = -value
console.log(negValue);
console.log(typeof (negValue));


//

console.log(1 + 2 + "2");
console.log("1"+(2+2));


let x=3
let y = ++x
console.log(++y);
