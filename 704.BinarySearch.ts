function search(nums: number[], target: number): number {
  let l = 0
  let r = nums.length - 1
  let cur: number

  while (l !== r) {
    cur = Math.floor((l + r) / 2)

    if (nums[cur] === target) {
      return cur
    } else if (nums[cur] > target) {
      r = cur
    } else {
      l = cur + 1
    }
  }

  return nums[l] === target ? l : -1
}

// [2, 5]
// 0
