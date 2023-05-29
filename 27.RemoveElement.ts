function removeElement(nums: number[], val: number): number {
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

  return nums.length
}
