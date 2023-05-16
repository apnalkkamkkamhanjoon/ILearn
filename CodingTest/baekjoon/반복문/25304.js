const fs = require("fs");
// let input = fs.readFileSync("./input.txt", "utf8").toString().trim();
let input = fs.readFileSync("/dev/stdin", "utf8").toString().trim();

input = input.split("\n");
let inputTestCase = input.map((item) => item.split(" "));
// int로 전환
inputTestCase = inputTestCase.map((item) => item.map((item) => Number(item)));

function solution(inputTestCase) {
  const x = inputTestCase[0][0];
  const n = inputTestCase[1][0];
  let totalPrice = 0;

  for (let i = 2; i < n + 2; i++) {
    let [price, amount] = inputTestCase[i];
    totalPrice += price * amount;
  }

  console.log(totalPrice === x ? "Yes" : "No");
}

solution(inputTestCase);