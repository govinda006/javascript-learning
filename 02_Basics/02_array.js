const marvel = ["thor", "ironman", "spidy"];
const dc = ["superman", "batman", "aquaman"];

// marvel.push(dc);

// console.log(marvel);
// console.log(marvel[3][1]);

// const newUni = marvel.concat(dc);
// console.log("new array after concat-", newUni);

const allNewHeroes = [...marvel, ...dc];
// console.log(allNewHeroes);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, 8, [5], [9, 10]];
console.log(anotherArr[3]);

const usedAnotherArr = anotherArr.flat(Infinity);
console.log(usedAnotherArr);

console.log(Array.isArray("Govinda"));
console.log(Array.from("Govinda"));
console.log(Array.from({name:"Govinda"}));//important
