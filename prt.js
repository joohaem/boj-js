"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +inputs[0];
const cardsCnt = [];
const cards = inputs[1]
  .split(" ")
  .map((num) => {
    if (isNaN(cardsCnt[+num])) cardsCnt[+num] = 1;
    else cardsCnt[+num]++;
    return +num;
  })
  .sort((a, b) => a - b);
const M = +inputs[2];
const numbers = inputs[3].split(" ").map(Number);

function binarySearch(targetNum) {
  let low = 0;
  let high = cards.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (cards[mid] === targetNum) {
      return cardsCnt[targetNum];
    } else if (cards[mid] > targetNum) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return 0;
}

const answer = numbers.map((num) => {
  return binarySearch(num);
});

console.log(answer.join("\n"));
