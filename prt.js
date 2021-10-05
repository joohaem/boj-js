// "use strict";

const fs = require("fs");
const { type } = require("os");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split("\n");

let answer = "";


console.log(answer);

//  N === 5
//     *
//    * *
//   *   *
//  *     *
// *********