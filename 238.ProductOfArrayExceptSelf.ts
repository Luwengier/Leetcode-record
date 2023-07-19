function productExceptSelf(nums: number[]): number[] {
  const originalLen = nums.length
  const result = Array(originalLen).fill(1)
  const pointer = [1, 1]

  for (let i = 0; i < originalLen; i++) {
    pointer[0] *= nums[i - 1] ?? 1
    pointer[1] *= nums[originalLen - i] ?? 1
    // nums[originalLen - i] 原本是 nums[originalLen - 1 - i + 1]

    result[i] *= pointer[0]
    result[originalLen - 1 - i] *= pointer[1]
  }

  return result
}
