function summaryRanges(nums: number[]): string[] {
  const r: string[] = []
  let temp = ''

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] === nums[i] + 1) {
      if (!temp) temp = nums[i].toString() + '->'
    } else {
      if (temp) {
        r.push(temp + nums[i])
        temp = ''
      } else {
        r.push(nums[i].toString())
      }
    }
  }

  return r
}
