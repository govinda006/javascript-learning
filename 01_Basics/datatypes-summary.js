//# Primitive // get the exact value from the memory
//7 types: String,Number,Null,Boolean,Undefined,Symbol,BigInt

const score = true;
console.log(typeof score);

const isLoggedIn = true;
console.log(isLoggedIn);

let userEmail;

//Referance type // get the referance of the value from memory
//Array , Objects , Functions

const heros = ["shaktiman","krish","flying jatt"]
// {
//     name: "Govinda",
//     age: 22,
// }

const myFunction = function(){
console.log("HELLO");

}

myFunction();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive), Heap(Non-primitive type)

let myName = "Govinda"

let anotherName = myName
anotherName = "Gp Parida"

console.log(myName);
console.log(anotherName);

let user = {
    name:"Govinda",
    age: 25,
    weight: 90,
}

console.log(user);

user.name = "Govinda Parida"
console.log(user);

let userTwo = user
userTwo.email = "govindaprasadparida2@gmail.com"
console.log(user);

