function twoSum(numbers: number[], target: number): number[] {
  let left = 0
  let right = numbers.length - 1
  let sum = numbers[left] + numbers[right]

  while (sum !== target) {
    if (sum < target) {
      left++
    } else if (sum > target) {
      right--
    }
    sum = numbers[left] + numbers[right]
  }

  return [left + 1, right + 1]
}
