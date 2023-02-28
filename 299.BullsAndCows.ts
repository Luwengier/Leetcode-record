function getHint(secret: string, guess: string): string {
  const h: Record<string, number> = {}
  let m = 0
  let n = 0

  for (let i = 0; i < secret.length; i++) {
    h[secret[i]] = (h[secret[i]] || 0) + 1
  }

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i]) {
      m++
      if (h[guess[i]]) {
        h[guess[i]]--
      } else {
        n--
      }
    } else if (h[guess[i]]) {
      h[guess[i]]--
      n++
    }
  }

  return `${m}A${n}B`
}
