// "use strict";

const fs = require("fs");
const { type } = require("os");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = Number(fs.readFileSync(filePath).toString());

let answer = "";

for(let i=1 ; i<=input ; i++) {
  if(i === 1) answer += " ".repeat(input - i) + "*";
  else if(i === input) answer += "*".repeat(i*2 - 1);
  else {
    answer += " ".repeat(input - i) + "*" + " ".repeat(i*2 - 3) + "*";
  }
  answer += '\n';  
}

console.log(answer);

//  N === 5
//     *
//    * *
//   *   *
//  *     *
// *********