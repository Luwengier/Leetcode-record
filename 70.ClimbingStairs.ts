function climbStairs(n: number): number {
  const h = {
    1: 1,
    2: 2,
    3: 3,
  }

  for (let i = 4; i <= n; i++) {
    h[i] = h[i - 2] + h[i - 1]
  }

  return h[n]
}
