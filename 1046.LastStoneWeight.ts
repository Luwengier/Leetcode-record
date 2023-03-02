function lastStoneWeight(stones: number[]): number {
  let x: number
  let y: number

  while (stones.length > 1) {
    stones.sort((a, b) => a - b)

    y = stones.pop()!
    x = stones.pop()!

    if (x !== y) stones.push(y - x)
  }

  return stones[0] || 0
}
