const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', input => {
  const [A, B] = input.split(' ').map(Number);

  if (A === 0 && B === 0) {
    rl.close();
  } else {
    console.log(A + B);
  }
});