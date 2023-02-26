function uniquePaths(m: number, n: number): number {
  const a = Array(n).fill(1)

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      a[j] = a[j] + a[j - 1]
    }
  }

  return a[n - 1]
}
