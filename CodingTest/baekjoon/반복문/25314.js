let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";

let input = Number(fs.readFileSync(filePath).toString()) / 4;
let long = "long ";

console.log(`${long.repeat(input)}int`);