"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...inputs] = fs.readFileSync(filePath).toString().trim().split("\n");

let totalArr = [];
let pivot = -1000000000;
let outputCnt = 0;

inputs.forEach((line) => {
  const stringLine = line.split(" ");
  const numberLine = stringLine.map((a) => +a);
  totalArr.push(numberLine);
});

totalArr.sort((a, b) => {
  if (a[0] < b[0]) return -1;
});

totalArr.forEach((line) => {
  if (pivot <= line[0]) {
    outputCnt += line[1] - line[0];
    pivot = line[1];
  } else if (pivot < line[1]) {
    outputCnt += line[1] - pivot;
    pivot = line[1];
  }
});

console.log(outputCnt);
