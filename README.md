# BOJ with JS

- [ID: gyhn123](https://www.acmicpc.net/user/gyhn123)

  [![Solved.ac
Profile](http://mazassumnida.wtf/api/v2/generate_badge?boj=gyhn123)](https://solved.ac/gyhn123)

- [SOPT ALGORITHMTA study](https://github.com/algorithmta-js)

- 문제 잘 읽자

<br />

## use strict

[MDN Web Docs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode)

1. 전역 변수 불가
2. 예외 발생
3. 8진 구문 금지
4. `with` 금지
5. `delete {name}` 금지
6. 최신 문법 금지
7. ...

<br />

## Input

`readline` 보다는 `fs` 사용

```javascript
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, cards, M, nums] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
```

<br />

## 자료형 변환

표현 별 속도차이 미미함 (`new` Object는 X)

- `Number()`
- `String()`
- `Boolean()`

- `const numbers = line.split(" ").map(Number);` : string[] -> number[]

<br />

## 반복문

`forEach`: 배열 / `for...in`: 객체 / `for...of`: iterable 객체(문자열까지)

<br />

## sort() 정렬

- sort() 메소드는 **문자열 기준**으로 정렬되므로, 인자로 **비교함수가 필수적**이다
- retrun 값이 음수이면, 둘의 순서가 바뀐다
- 이미 정렬되어 있는 배열의 역순 정렬은 `.reverse()`가 가장 좋다

```javascript
const arr = [5, 1, 8, 11, 2];
arr.sort(); // 1 11 2 5 8
arr.sort((a, b) => a - b); // 1 2 5 8 11
arr.sort((a, b) => b - a); // 11 8 5 2 1
```

<br />

## 문자열

- `.substr(idx, length)`

- `slice( idx1[, idx2] )`

  :: [idx1 :] 혹은 [idx1 : idx2 - 1] 의 원소들로 구성된 새 배열을 리턴한다

- `splice( idx1[, idx2] )`

  :: [idx1:] 혹은 [idx1 : idx2]의 원소들을 삭제하고,
  [idx1 : idx2] 의 원소들로 구성된 배열을 리턴한다

<br />

## 다차원 배열 선언

```javascript
const graph = arr.map((num) => num.split(" ").map(Number));
```

```javascript
visited = Array.from(Array(N), () => Array(M).fill(false));
```

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

<br />

## Math

- `Math.max(a, b, c, ...)`

<br />

## Output

`console.log`는 호출 시 시간이 소요되므로, 저장했다가 계산 종료 후 한 번에 출력

<br />

## Map & Set

#### Map ::

- key값에 string이 아닌 어느 값이든 넣을 수 있다
- 객체의 **size**를 알아야 할 경우
- 객체의 값을 자주 변경하고 존재유무 및 특정 key의 **index(순서)**를 판단하는 일이 잦을 때

#### Set ::

- **존재유무 및 중복 제거** (key 값만 존재)

## 정규표현식

- 특정문자 제거 : `str.replace(/\{문자}/g,'')`;

- [a-z] : a ~ z 사이의 문자를 찾음

  [abc] : a, b, c중 하나를 찾음

  [^abc] : a, b, c를 제외한 문자를 찾음

## n진법 변환

- 10 -> n : `{value}.toString(n)`
- n -> 10 : `Number.parseInt({value}, n)`

## Tip.

- "짝 짓기" --> `stack`

- "최소 거리" --> `BFS`

- "경로" --> `DFS`
