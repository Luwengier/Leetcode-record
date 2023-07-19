function groupAnagrams(strs: string[]): string[][] {
  const h: Record<string, string[]> = {}

  strs.forEach((str) => {
    const k = [...str].sort().join('')
    h[k] ? h[k].push(str) : (h[k] = [str])
  })

  return Object.values(h)
}
