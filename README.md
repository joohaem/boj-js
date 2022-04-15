# BOJ with JS

[ID: gyhn123](https://www.acmicpc.net/user/gyhn123)

## use strict

[MDN Web Docs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode)

1. 전역 변수 불가
2. 예외 발생
3. 8진 구문 금지
4. `with` 금지
5. `delete {name}` 금지
6. 최신 문법 금지
7. ...

## Input

`readline` 보다는 `fs` 사용

```javascript
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
```

## 자료형 변환

표현 별 속도차이 미미함 (`new` Object는 X)

- `Number()`
- `String()`
- `Boolean()`

- `const numbers = line.split(" ").map(Number);` : string[] -> number[]

## 반복문

`forEach`: 배열 / `for...in`: 객체 / `for...of`: iterable 객체(문자열까지)

## 다차원 배열 선언

```javascript
let dp = [];

for (let i = 0; i < 21; i++) {
  dp[i] = [];
  for (let j = 0; j < 21; j++) {
    dp[i][j] = [];
    for (let k = 0; k < 21; k++) {
      dp[i][j][k] = 0;
    }
  }
}
```

## Math

- `Math.max(a, b)`

## Output

`console.log`는 호출 시 시간이 소요되므로, 저장했다가 계산 종료 후 한 번에 출력
