"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, targets, m, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [from, to] = targets.split(" ").map(Number);

const graph = {};
const kinship = [];
for (let i = 1; i <= +n; i++) {
  graph[i] = [];
  kinship[i] = -1;
}

inputs.forEach((line) => {
  const [parent, child] = line.split(" ").map(Number);
  graph[parent].push(child);
  graph[child].push(parent);
});

// -----------------------------------

function bfs(startNode) {
  let visitQueue = [];
  let visited = [];

  visitQueue.push(startNode);
  kinship[startNode] = 0;

  while (visitQueue.length > 0) {
    const node = visitQueue.shift();
    if (node === to) return kinship[node];

    if (!visited.includes(node)) {
      visited.push(node);
      visitQueue = [...visitQueue, ...graph[node]];

      graph[node].forEach((nodeInQ) => {
        if (kinship[nodeInQ] === -1) kinship[nodeInQ] = kinship[node] + 1;
      });
    }
  }

  return -1;
}

// -----------------------------------

console.log(bfs(from));
