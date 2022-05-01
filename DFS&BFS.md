## DFS

```javascript
function dfs(startNode) {
  let visitStack = [];
  let visited = [];

  visitStack.push(startNode);

  while (visitStack.length > 0) {
    const node = visitStack.pop();

    if (!visited.includes(node)) {
      visited.push(node);

      const reverseVertexes = [...graph[node]].reverse();
      visitStack = [...visitStack, ...reverseVertexes];
    }
  }

  return visited;
}
```

## BFS

```javascript
function bfs(startNode) {
  let visitQueue = [];
  let visited = [];

  visitQueue.push(startNode);

  while (visitQueue.length > 0) {
    const node = visitQueue.shift();

    if (!visited.includes(node)) {
      visited.push(node);
      if (!visitQueue.includes()) visitQueue = [...visitQueue, ...graph[node]];
    }
  }

  return visited.join(" ");
}
```
