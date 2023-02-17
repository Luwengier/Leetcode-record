function isSubsequence(s: string, t: string): boolean {
  let ci = 0
  const ti = s.length

  for (let i = 0; i <= t.length; i++) {
    if (ci === ti) {
      return true
    }
    if (t[i] === s[ci]) {
      ci += 1
    }
  }

  return false
}
