"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [w, h] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(", ")
  .map(Number);
// const s = fs.readFileSync(filePath).toString().trim().replace(/\[]/g, "");

// -----------------------------------

function GCD(num1, num2) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return gcd(num1, num2);
}

// -----------------------------------

const gcd = GCD(w, h);
// 한 세트
const _w = w / gcd;
const _h = h / gcd;
const ratio = _h / _w;

let minusCntOnOneSet = 0;
for (let i = 1; i <= _w; i++) {
  const min = Math.floor(ratio * (i - 1));
  const max = Math.ceil(ratio * i);

  minusCntOnOneSet += max - min;
}

console.log(w * h - gcd * minusCntOnOneSet);
