/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const h = {}

  for (let i = 0; i < nums.length; i++) {
    if (h[target - nums[i]] !== undefined) {
      return [i, h[target - nums[i]]]
    }
    h[nums[i]] = i
  }
};