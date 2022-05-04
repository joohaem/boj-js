"use strict";

class MinHeap {
  constructor() {
    this.list = [null];
  }

  swap(a, b) {
    [this.list[a], this.list[b]] = [this.list[b], this.list[a]];
  }

  getParent(current) {
    return this.list[Math.floor(current / 2)];
  }

  getLeftChildIdx(current) {
    return current * 2;
  }

  getRightChildIdx(current) {
    return current * 2 + 1;
  }

  bubbleUp() {
    let pos = this.size() - 1;
    while (pos >= 1) {
      const parent = this.getParent(pos);
      const parentIdx = Math.floor(pos / 2);
      if (!parent) return;

      if (parent > this.list[pos]) {
        this.swap(parentIdx, pos);
        pos = parentIdx;
      } else return;
    }
  }

  bubbleDown() {
    let pos = 1;
    while (pos < this.size()) {
      const leftIdx = this.getLeftChildIdx(pos),
        rightIdx = this.getRightChildIdx(pos);

      let maxIndex = pos;
      if (leftIdx < this.size() && this.list[leftIdx] < this.list[maxIndex])
        maxIndex = leftIdx;
      if (rightIdx < this.size() && this.list[rightIdx] < this.list[maxIndex])
        maxIndex = rightIdx;

      if (maxIndex !== pos) {
        this.swap(maxIndex, pos);
        pos = maxIndex;
      } else return;
    }
  }

  insert(element) {
    this.list.push(element);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 2) return this.list.pop();

    const answer = this.list[1];

    this.list[1] = this.list.pop();
    this.bubbleDown();

    return answer;
  }

  size() {
    return this.list.length;
  }

  empty() {
    return this.size() === 1;
  }
}

// -----------------------------------

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [_N, ...inputs] = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +_N;

// -----------------------------------

const myQ = new MinHeap();
let answer = -1;

const [...nums] = inputs.map((line) => {
  return line.split(" ").map(Number);
});

nums.forEach((line) => {
  for (let num of line) {
    myQ.insert(num);

    if (myQ.size() > N) answer = myQ.pop();
  }
});

// -----------------------------------

console.log(answer);
