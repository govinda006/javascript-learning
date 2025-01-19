// const promiseOne = new Promise(function (resolve, reject) {
//   // DO an async task
//   //DB calls, cryptography, network

//   setTimeout(function () {
//     console.log("Async task complete");
//     resolve();
//   }, 2000);
// });

// promiseOne.then(function () {
//   console.log("Promise Consumed");
// });

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Async two resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userName: "chai", emai: "abc@gmail.com" });
  }, 2000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userName: "GOvinda", password: "Sonu**10" });
    } else {
      reject("Error: something went wrong");
    }
  }, 2000);
});

promiseFour.then((user) => {
  console.log(user);
  return user.username;
});
