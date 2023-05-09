const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', line => {
  const [a, b, c] = line.split(' ').map(Number);
  console.log(a + b + c);
  rl.close();
});