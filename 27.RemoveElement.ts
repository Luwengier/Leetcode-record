function removeElement(nums: number[], val: number): number {
  const originLen = nums.length
  let counter = 0
  let i = 0

  while (i < nums.length) {
    while (nums[i + counter] === val) {
      counter += 1
    }
    if (counter > 0) {
      nums.splice(i, counter)
      counter = 0
    }
    i++
  }

  const r = nums.length
  nums.splice(nums.length, 0, ...new Array(originLen - nums.length))

  return r
}
