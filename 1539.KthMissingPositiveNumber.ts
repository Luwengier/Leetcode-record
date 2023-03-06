function findKthPositive(arr: number[], k: number): number {
  let missingCounter = 1
  let arrIndex = 0
  let cur = 0

  while (missingCounter <= k) {
    cur++
    cur === arr[arrIndex] ? arrIndex++ : missingCounter++
  }

  return cur
}
