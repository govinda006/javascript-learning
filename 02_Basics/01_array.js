//array

const myArr = [0, 1, 2, 3, 4, 5];

const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr2);
// Array methods

// myArr.push(6);
// myArr.push(7);

myArr.unshift(8);
myArr.shift();

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(6));

const newArr = myArr.join();

// console.log(myArr);
// console.log(typeof myArr);

// console.log(newArr);
// console.log(typeof newArr);

//slice and splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);

console.log("slice-", myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log("splice-", myn2);

console.log("C-originalArray-", myArr);
