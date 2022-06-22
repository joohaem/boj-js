## Combination

```javascript
function combination(arr, selectNum) {
  const result = [];

  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    // const rest = [...arr.slice(0,idx), ...arr.slice(idx+1)];
    // 위에는 순열(Permutation)
    const rest = arr.slice(idx + 1);
    const combinations = combination(rest, selectNum - 1);
    const attach = combinations.map((combination) => [v, ...combination]);
    result.push(...attach);
  });

  return result;
}
```
