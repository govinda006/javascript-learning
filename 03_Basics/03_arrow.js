const user = {
  username: "Govinda",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "Gp parida";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "Govinda";
//   console.log(this.username);
// }

// chai();

// const chai = function () {
//   let username = "Govinda";
//   console.log(this.username);
// };
// chai();

const chai = () => {
  let username = "Govinda";
  console.log(this);
};
// chai();

// ++++++++++++++++ explicit return ++++++++++

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// +++++++++++++++++++++ implicit return ++++++++++
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({
  username: "Govinda",
});

console.log(addTwo(4, 5));
