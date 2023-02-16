function runningSum(nums: number[]): number[] {
  return nums.reduce((acc: number[], cur: number): number[] => {
    acc.push((acc[acc.length - 1] || 0) + cur)
    return acc
  }, [])
};