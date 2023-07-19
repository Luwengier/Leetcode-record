function insert(intervals: number[][], newInterval: number[]): number[][] {
  // 找出 newInterval 該被插入的 index
  let insertIndex = intervals.findIndex(
    (interval) => newInterval[0] <= interval[0]
  )
  insertIndex = insertIndex >= 0 ? insertIndex : intervals.length

  intervals.splice(insertIndex, 0, newInterval)

  // 以下繼承自 56.
  // 並自 insertIndex 前一個 index 開始運作
  let i = insertIndex === 0 ? 0 : insertIndex - 1

  while (i < intervals.length - 1) {
    if (intervals[i][1] >= intervals[i + 1][0]) {
      intervals.splice(i, 2, [
        intervals[i][0],
        Math.max(intervals[i][1], intervals[i + 1][1]),
      ])
    } else {
      i++
    }
  }

  return intervals
}
