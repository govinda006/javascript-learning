//Immediately Invoked Function Expression

(function chai() { //named iife
  console.log(`DB connected`);
})();

((name) => {
  console.log(`DB connected two ${name}`);
})("Govinda");
