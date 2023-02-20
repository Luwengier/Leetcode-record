function searchInsert(nums: number[], target: number): number {
  if (nums[0] > target) return 0
  if (nums[nums.length - 1] < target) return nums.length

  return nums.findIndex(
    (i, index) => i === target || (i > target && nums[index - 1] < target)
  )
}
