const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nums = [];
rl.on('line', function (line) {
  nums = line.split(' ').map(Number).sort((a, b) => a - b);  // 눈의 수를 오름차순으로 정렬
}).on('close', function () {
  let sum = 0;
  if (nums[0] === nums[2]) {  // 모든 눈이 같은 경우
    sum = 10000 + nums[0] * 1000;
  } else if (nums[0] === nums[1] || nums[1] === nums[2]) {  // 두 개의 눈이 같은 경우
    sum = 1000 + nums[1] * 100;
  } else {  // 모든 눈이 다른 경우
    sum = nums[2] * 100;
  }
  console.log(sum);
  process.exit();
});
