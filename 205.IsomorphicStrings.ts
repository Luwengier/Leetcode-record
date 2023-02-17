function isIsomorphic(s: string, t: string): boolean {
  const h = {}
  const h2 = {}

  for (let i = 0; i < s.length; i++) {
    if (!h[t[i]]) {
      h[t[i]] = s[i]
      h2[s[i]] = t[i]
    } else if (h[t[i]] !== s[i]) {
      return false
    }
  }

  return Object.keys(h).length === Object.keys(h2).length
}
