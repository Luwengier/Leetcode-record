function runningSum(nums: number[]): number[] {
  return nums.reduce((acc: number[], cur: number): number[] => {
    acc.push((acc[acc.length - 1] || 0) + cur)
    return acc
  }, [])
};

// function runningSum(nums: number[]): number[] {
//   const r = []

//   for (let i = 0; i < nums.length; i++) {
//       r.push((r[i - 1] || 0) + nums[i])
//   }

//   return r
// };