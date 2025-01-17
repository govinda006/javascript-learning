// for

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   //   console.log(element);
//   if (element == 5) {
//     // console.log(`${element} is best number`);
//   }
// }

for (let i = 1; i <= 10; i++) {
  console.log(`Outer row ${i} `);

  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner row ${j} and inner loop ${i}`);
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
