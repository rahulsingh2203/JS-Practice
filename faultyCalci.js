console.log("Faulty Calculator");

let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter operator");

let random = Math.random() * 100;

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 50) {
    console.log(random);
  console.log(`Result is: ${eval(`${a}${c}${b}`)}`);
} else {
  c = obj[c];
  console.log(random);
  console.log(`Result is: ${eval(`${a}${c}${b}`)}`);
}
