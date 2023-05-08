const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', line => {
  const [hour, minute] = line.split(' ').map(Number);

  let newMinute = minute - 45;
  let newHour = hour;

  if (newMinute < 0) {
    newMinute += 60;
    newHour -= 1;
  }

  if (newHour < 0) {
    newHour += 24;
  }

  console.log(`${newHour} ${newMinute}`);
  rl.close();
});