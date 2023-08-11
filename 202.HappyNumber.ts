const cache = new Map()

function isHappy(n: number): boolean {
  const collection = new Set<number>()

  function check(n: number): boolean {
    if (n === 1 || cache.get(n)) {
      collection.forEach((n) => {
        cache.set(n, true)
      })
      return true
    }
    if (collection.has(n) || cache.get(n) === false) {
      collection.forEach((n) => {
        cache.set(n, false)
      })
      return false
    }

    collection.add(n)

    const nums = n.toString().split('')
    const newN = nums.reduce((acc, cur) => acc + Number(cur) ** 2, 0)

    return check(newN)
  }

  return check(n)
}
