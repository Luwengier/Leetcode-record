/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  k = k % nums.length;
  const temp = nums.splice(-k, k);
  nums.splice(0, 0, ...temp);
}
