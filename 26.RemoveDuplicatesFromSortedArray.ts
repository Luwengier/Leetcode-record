function removeDuplicates(nums: number[]): number {
  let index = 0;
  let counter = 0;
  const originLength = nums.length;

  while (index < nums.length) {
    while (nums[index + counter] === nums[index + counter + 1]) {
      counter++;
    }
    if (counter) {
      nums.splice(index + 1, counter);
      counter = 0;
    }
    index++;
  }

  const k = nums.length;
  nums.splice(k, 0, ...new Array(originLength - k));

  return k;
}
