/**
 Do not return anything, modify nums in-place instead.
 */

function moveZeroes(nums: number[]): void {
  let left = 0
  for (let right = 0; right < nums.length; right++) {
    const val = nums[right]
    nums[right] = 0
    if (val !== 0) {
      nums[left] = val
      left++
    }
  }
}

// function moveZeroes(nums: number[]): void {
//   let acc = 0
//   let startIndex = 0
//   const initialLen = nums.length

//   for (let i = 0; i < nums.length; ) {
//     if (nums[i] === 0) {
//       acc = 1
//       startIndex = i

//       while (acc[i + 1] === 0) {
//         acc++
//         i++
//       }

//       nums.splice(startIndex, acc)
//     } else i++
//   }

//   while (initialLen > nums.length) nums.push(0)
// }
