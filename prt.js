"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const n = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
// const s = fs.readFileSync(filePath).toString().trim().replace(/\[]/g, "");

const orders = ["XYZ", "XWY", "WXA"];
const course = [2, 3, 4];
const result = [];

// -----------------------------------

function combination(arr, selectNum) {
  const _result = [];

  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combinations = combination(rest, selectNum - 1);
    const attach = combinations.map((combination) => [v, ...combination]);

    _result.push(...attach);
  });

  return _result;
}

// -----------------------------------

course.forEach((num) => {
  const resultMap = new Map();

  orders.forEach((order) => {
    combination(order.split(""), num).forEach((com) => {
      const _key = (com.sort() + "").replace(/\,/g, "");

      if (resultMap.has(_key)) resultMap.set(_key, resultMap.get(_key) + 1);
      else resultMap.set(_key, 1);
    });
  });

  const MAX = Math.max(...resultMap.values());
  resultMap.forEach((value, key) => {
    if (value === MAX && value > 1) result.push(key);
  });
});

console.log(result.sort());
