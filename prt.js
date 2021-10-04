"use strict";

const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split("\n");

console.log(input);


// console.log("Hello");
// const arr = [1, 2, 3];
// arr.forEach(console.log);