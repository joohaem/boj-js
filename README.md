# BOJ with JS
[ID: gyhn123](https://www.acmicpc.net/user/gyhn123)
- [x] 입출력
- [ ] Dynamic Programming 
- [ ] etc..
- [ ] 그래프
- [ ] 이분탐색/삼분탐색
- [ ] 분할정복
- [ ] 그리디 알고리즘
- [ ] 완전탐색

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
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = fs.readFileSync(filePath).toString().split("\n");
```

## 자료형 변환
표현 별 속도차이 미미함 (`new` Object는 X)
- `Number()`
- `.parseInt()`
- `+()`

- `String()`
- `Boolean()`

## Output
`console.log`는 시간이 호출 시 시간이 소요되므로, 저장했다가 계산 종료 후 한 번에 출력