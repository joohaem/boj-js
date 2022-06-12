"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const n = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
// const s = fs.readFileSync(filePath).toString().trim().replace(/\[]/g, "");

// -----------------------------------

let n = 10;

let answer = "";

const restObj = {
  1: 1,
  2: 2,
  0: 4,
};

const restArr = [];

while (n > 0) {
  restArr.push(n % 3);
  n = n % 3 === 0 ? Math.floor(n / 3 - 1) : Math.floor(n / 3);
}

console.log(restArr);

// -----------------------------------

for (let i = restArr.length - 1; i >= 0; i--) answer += restObj[restArr[i]];
console.log(`answer: `, answer);
