"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const n = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
// const s = fs.readFileSync(filePath).toString().trim().replace(/\[]/g, "");

const s = "baabaa";

// -----------------------------------

function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!stack.length || stack[stack.length - 1] !== s[i]) stack.push(s[i]);
    else stack.pop();
  }

  return stack.length ? 0 : 1;
}

// -----------------------------------
