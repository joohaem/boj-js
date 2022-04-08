let dp = [];
for (let i = 0; i <= 101; i++) {
  dp[i] = [];
  for (let j = 0; j <= 101; j++) {
    dp[i][j] = [];
    for (let k = 0; k <= 101; k++) {
      dp[i][j][k] = 0;
    }
  }
}
dp[50][50][50] = 1;