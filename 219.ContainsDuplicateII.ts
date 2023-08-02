function containsNearbyDuplicate(nums: number[], k: number): boolean {
  if (nums.length === 1 || k === 0) return false

  let left = 0
  let right = 1
  const store = new Set([nums[0]])

  while (right < nums.length) {
    if (store.has(nums[right])) return true

    store.add(nums[right])

    if (right - left === k) {
      store.delete(nums[left])
      left++
    }

    right++
  }

  return false
}
