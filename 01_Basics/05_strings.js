const name = "Govinda"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('Govinda-sn');

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName[0]);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('G'));

const newString = gameName.substring(0,6)
console.log(newString);

const anotherString = gameName.slice(-6,1)
console.log(anotherString);

const url = "https://govinda.com/govinda%20parida"

console.log(url.replace('%20', '-'));

console.log(gameName.split('-'));





