function isHappy(n: number): boolean {
  let collect: number[] = []
  while (true) {
    n = String(n)
      .split('')
      .reduce((acc, cur) => acc + Math.pow(Number(cur), 2), 0)

    if (n === 1) return true
    if (collect.includes(n)) return false

    collect.push(n)
  }
}
