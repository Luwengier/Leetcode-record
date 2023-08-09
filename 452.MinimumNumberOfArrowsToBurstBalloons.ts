function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[1] - b[1])

  let cur = -Infinity
  let result = 0

  for (const [start, end] of points) {
    if (cur < start) {
      cur = end
      result++
    }
  }

  return result
}
