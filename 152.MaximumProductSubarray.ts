function maxProduct(nums: number[]): number {
  if (nums.length === 1) return nums[0]

  let cur = nums[0]
  let max = cur

  let prevPos = 0
  let prevNeg = 0

  let posTimesCur = 0
  let negTimesCur = 0

  let newPos = 0
  let newNeg = 0

  for (let i = 0; i < nums.length; i++) {
    cur = nums[i]
    posTimesCur = cur * prevPos
    negTimesCur = cur * prevNeg
    newPos = Math.max(posTimesCur, negTimesCur, cur)
    newNeg = Math.min(posTimesCur, negTimesCur, cur)

    prevPos = newPos >= 0 ? newPos : 0
    prevNeg = newNeg < 0 ? newNeg : 0

    max = Math.max(max, newPos)
  }

  return max
}
