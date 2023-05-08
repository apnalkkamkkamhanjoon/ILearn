const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', line => {
  const [a, b] = line.split(' ').map(Number);
  if(a > b) {
    console.log('>');
  }else if(a==b){
    console.log('==');
  }else{
    console.log('<')
  }
});