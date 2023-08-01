function majorityElement(nums: number[]): number {
  const target = nums.length / 2
  let cur: number | undefined
  let counter = 1

  nums.sort()

  return (
    nums.find((num) => {
      if (cur === num) {
        counter++
      } else {
        cur = num
        counter = 1
      }

      return counter >= target
    }) || -1
  )
}
