// // for

// // for (let i = 0; i <= 10; i++) {
// //   const element = i;
// //   //   console.log(element);
// //   if (element == 5) {
// //     // console.log(`${element} is best number`);
// //   }
// // }

// for (let i = 1; i <= 10; i++) {
//   //   console.log(`Outer row ${i} `);

//   for (let j = 1; j <= 10; j++) {
//     // console.log(`Inner row ${j} and inner loop ${i}`);
//     // console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// let myArray = ["Ironman", "Batman", "Superman"];
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
// }

//break and continue
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`detected ${index}`);
    continue
  }
  console.log(`value of i is: ${index}`);
}
