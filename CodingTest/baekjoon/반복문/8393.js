const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', input => {
    const n = parseInt(input);

    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  
    console.log(sum);
  
    rl.close();
});