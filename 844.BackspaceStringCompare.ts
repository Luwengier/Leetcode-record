function backspaceCompare(s: string, t: string): boolean {
  const sa: string[] = []
  const ta: string[] = []

  for (let c of s) {
    if (c === '#') {
      sa.pop()
    } else {
      sa.push(c)
    }
  }

  for (let c of t) {
    if (c === '#') {
      ta.pop()
    } else {
      ta.push(c)
    }
  }

  return sa.join('') === ta.join('')
}
