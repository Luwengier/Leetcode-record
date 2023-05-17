function removeDuplicates(nums: number[]): number {
  let index = 0;
  let counter = 0;
  const originLength = nums.length;

  while (index < nums.length) {
    while (nums[index + counter] === nums[index + counter + 1]) {
      counter++;
    }
    if (counter) {
      if (counter > 1) {
        nums.splice(index + 1, counter - 1);
        index++;
      }
      counter = 0;
    }
    index++;
  }

  const k = nums.length;
  nums.splice(k, 0, ...new Array(originLength - k));

  return k;
}

// Related to NO.26
