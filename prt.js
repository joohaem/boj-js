"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [_N, inputs] = fs.readFileSync(filePath).toString().trim().split("\n");

// -----------------------------------

const inputsArr = inputs.split(" ").map(Number);
const inputsSet = new Set([...inputsArr].sort((a, b) => a - b));
const inputsMap = new Map();

[...inputsSet].forEach((input, idx) => {
  inputsMap.set(input, idx);
});

let answer = "";
inputsArr.forEach((input) => {
  return (answer += `${inputsMap.get(input)} `);
});

console.log(answer);
