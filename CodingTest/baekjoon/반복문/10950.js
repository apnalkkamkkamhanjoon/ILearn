const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let testCase = 0;
let count = 0;
let numbers = [];

rl.on('line', input => {
  if (testCase === 0) {
    testCase = parseInt(input);
  } else {
    numbers.push(input.split(' ').map(Number));
    count++;

    if (count === testCase) {
      for (let i = 0; i < testCase; i++) {
        const [A, B] = numbers[i];
        console.log(A + B);
      }
      rl.close();
    }
  }
});
