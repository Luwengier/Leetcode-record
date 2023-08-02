function maxArea(height: number[]): number {
  let max = 0
  let left = 0
  let right = height.length - 1

  while (left < right) {
    max = Math.max(Math.min(height[right], height[left]) * (right - left), max)

    height[right] > height[left] ? left++ : right--
  }

  return max
}
