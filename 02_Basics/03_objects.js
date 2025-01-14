//singleton
// Object.create
//object literals

const mySym = Symbol("key1");

const jsUser = {
  name: "Govinda",
  "full-name": "Govinda Prasad Parida",
  [mySym]: "key1",
  age: 25,
  location: "Bengaluru",
  email: "gpp62000@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(jsUser["full-name"]);
console.log(jsUser["age"]);
console.log(typeof jsUser[mySym]);
console.log(jsUser);

jsUser.greeting = function () {
  console.log(`hello user, ${this.name}`);
};

jsUser.greeting();
