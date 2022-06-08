"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
// const s = fs.readFileSync(filePath).toString().trim().replace(/\[]/g, "");

// -----------------------------------

let result = [];

const idNIsEnter = [];
const idNName = {};

function processStr(name, isEnter) {
  if (isEnter) {
    return `${name}님이 들어왔습니다.`;
  } else {
    return `${name}님이 나갔습니다.`;
  }
}

// -----------------------------------

const records = inputs[0]
  .slice(1, -1)
  .split(", ")
  .map((str) => str.slice(1, -1));

records.forEach((record) => {
  const [DO, ID, NAME] = record.split(" ");

  let idx = 0;
  switch (DO) {
    case "Enter":
      idNIsEnter.push({ id: ID, isEnter: true });
      idNName[ID] = NAME;
      break;
    case "Change":
      idNName[ID] = NAME;
      break;
    default:
      idNIsEnter.push({ id: ID, isEnter: false });
  }
});

idNIsEnter.forEach((el) => {
  result.push(processStr(idNName[el.id], el.isEnter));
});

console.log(result);
