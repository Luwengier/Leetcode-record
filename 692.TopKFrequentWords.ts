function topKFrequent(words: string[], k: number): string[] {
  const h: Record<string, number> = {}

  words.forEach((w) => {
    h[w] = (h[w] || 0) + 1
  })

  return Object.entries(h)
    .sort((a, b) => {
      if (b[1] === a[1]) {
        return a[0].toLocaleUpperCase() < b[0].toUpperCase() ? -1 : 1
      } else {
        return b[1] - a[1]
      }
    })
    .slice(0, k)
    .map((i) => i[0])
}
