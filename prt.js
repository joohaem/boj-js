"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const n = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
// const s = fs.readFileSync(filePath).toString().trim().replace(/\[]/g, "");

const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course = [2, 3, 4];

// -----------------------------------

function combination(arr, selectNum) {
  const result = [];

  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    // const rest = [...arr.slice(0,idx), ...arr.slice(idx+1)];
    const rest = arr.slice(idx + 1);
    const combinations = combination(rest, selectNum - 1);
    const attach = combinations.map((combination) => [v, ...combination]);
    result.push(...attach);
  });

  return result;
}

// -----------------------------------
