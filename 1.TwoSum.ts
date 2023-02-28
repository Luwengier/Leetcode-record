function twoSum(nums: number[], target: number): number[] | undefined {
  const m = {}

  for (let i = 0; i < nums.length; i++) {
    if (m[target - nums[i]] !== undefined) {
      return [i, m[target - nums[i]]]
    }
    m[nums[i]] = i
  }
}
