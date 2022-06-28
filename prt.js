"use strict";

const { FORMERR } = require("dns");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const n = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
// const s = fs.readFileSync(filePath).toString().trim().replace(/\[]/g, "");

// -----------------------------------

// -----------------------------------

function solution() {
  const arr1 = [..."E=M*C^2".toLowerCase()];
  const arr2 = [..."e=m*c^2".toLowerCase()];

  const map1 = new Map();
  for (let i = 0; i < arr1.length - 1; i++) {
    const target = arr1[i] + arr1[i + 1];

    if (/^[a-z]+$/.test(target))
      map1.set(target, map1.has(target) ? map1.get(target) + 1 : 1);
  }
  const map2 = new Map();
  for (let i = 0; i < arr2.length - 1; i++) {
    const target = arr2[i] + arr2[i + 1];

    if (/^[a-z]+$/.test(target))
      map2.set(target, map2.has(target) ? map2.get(target) + 1 : 1);
  }

  const intersectionMap = new Map();
  const unionMap = new Map([...map1]);
  for (let str of map1.keys()) {
    if (map2.has(str))
      intersectionMap.set(str, Math.min(map1.get(str), map2.get(str)));
  }
  for (let str of map2.keys()) {
    unionMap.set(
      str,
      unionMap.has(str)
        ? Math.max(unionMap.get(str), map2.get(str))
        : map2.get(str)
    );
  }

  let intersectionLength = 0;
  [...intersectionMap.values()].forEach(
    (value) => (intersectionLength += value)
  );
  let unionLength = 0;
  [...unionMap.values()].forEach((value) => (unionLength += value));

  if (unionLength === 0) return 65536;

  var answer = Math.floor((intersectionLength / unionLength) * 65536);
  return answer;
}

console.log(solution());
