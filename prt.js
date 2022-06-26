"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const n = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
// const s = fs.readFileSync(filePath).toString().trim().replace(/\[]/g, "");

// -----------------------------------

function getCustomStr(w) {
  let resultStr = "";

  if (w === "") return "";

  const u = w.slice(0, getIdxBalance(w) + 1);
  const v = w.slice(getIdxBalance(w) + 1);

  if (checkCorrect(u)) {
    resultStr += u + getCustomStr(v);
  } else {
    resultStr = `(${getCustomStr(v)})${getReverseU(u)}`;
  }

  return resultStr;
}

function getIdxBalance(w) {
  let idx = 0;
  let openBlockCnt = 0;
  let closeBlockCnt = 0;

  for (let block of w) {
    if (block === "(") {
      openBlockCnt++;
    } else {
      closeBlockCnt++;
    }

    if (openBlockCnt === closeBlockCnt) return idx;
    idx++;
  }

  return idx;
}

function checkCorrect(u) {
  const stack = [];
  let top = -1;

  for (let block of u) {
    if (stack[top] === "(" && block === ")") {
      top--;
    } else {
      stack[++top] = block;
    }

    if (top === -1) return true;
  }

  return false;
}

function getReverseU(u) {
  const _u = u.slice(1, u.length - 1);
  let returnStr = "";

  for (let block of _u) {
    if (block === "(") returnStr += ")";
    else returnStr += "(";
  }

  return returnStr;
}

// -----------------------------------

function solution(_p) {
  const p = "()))((()";
  const answer = getCustomStr(p);

  console.log(answer);
}

solution();
