function strStr(haystack: string, needle: string): number {
  let slow = 0
  let fast = 0

  while (fast < haystack.length) {
    if (haystack[fast] === needle[fast - slow]) {
      if (fast - slow + 1 === needle.length) return slow
      fast++
    } else {
      if (fast === slow) {
        fast++
        slow++
      } else {
        fast = slow = slow + 1
      }
    }
  }

  return -1
}
