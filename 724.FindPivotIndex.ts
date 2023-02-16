function pivotIndex(nums: number[]): number {

  let leftSum = 0
  let rightSum = nums.reduce((acc,cur) => acc + cur, 0)

  let prevEl = 0

  return nums.findIndex((el, index) => {
      leftSum += prevEl
      rightSum -= el
      prevEl = el

      return leftSum === rightSum
  })
};