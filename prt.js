"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const inputNum = input.map((n) => +n);
let max = 0;
let arr = [];

for (let i = 0; i < N; i++) {
  const currentNum = inputNum[i];
  arr.push(currentNum);
}

arr.sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  if (max < arr[i] * (N - i)) {
    max = arr[i] * (N - i);
  }
}

console.log(max);
