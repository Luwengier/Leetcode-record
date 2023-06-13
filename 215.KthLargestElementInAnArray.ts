function findKthLargest(nums: number[], k: number): number {
  const sortedNums = nums.sort((a, b) => a - b)

  return sortedNums[nums.length - k]
}
