const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num1, num2;

rl.on("line", (line) => {
  if (!num1) {
    num1 = Number(line);
  } else {
    num2 = Number(line);
    m1 = num2 % 10;
    m2 = Math.floor((num2 % 100) / 10);
    m3 = Math.floor(num2 / 100);
    console.log(m1 * num1);
    console.log(m2 * num1);
    console.log(m3 * num1);
    console.log(num1 * num2);
  }
});
