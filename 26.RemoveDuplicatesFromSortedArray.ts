function removeDuplicates(nums: number[]): number {
  let index = 0
  let counter = 0

  while (index < nums.length) {
    while (nums[index + counter] === nums[index + counter + 1]) {
      counter++
    }
    if (counter) {
      nums.splice(index + 1, counter)
      counter = 0
    }
    index++
  }

  return nums.length
}
