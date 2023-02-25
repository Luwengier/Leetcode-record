function fib(n: number): number {
  const h = {
    0: 0,
    1: 1,
  }

  for (let i = 2; i <= n; i++) {
    h[i] = h[i - 2] + h[i - 1]
  }

  return h[n]
}
