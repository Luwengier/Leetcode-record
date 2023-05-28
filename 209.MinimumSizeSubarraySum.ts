function minSubArrayLen(target: number, nums: number[]): number {
  let l = 0
  let r = 0
  let sum = nums[0]
  let result = Infinity

  while (r < nums.length) {
    if (sum >= target) {
      result = Math.min(result, r - l + 1)
      sum -= nums[l++]
    } else {
      sum += nums[++r]
    }
  }

  return result === Infinity ? 0 : result
}
