/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let l = 1
    let r = n
    let cur: number

    while (l !== r) {
      cur = Math.floor((l + r) / 2)
      if (isBadVersion(cur)) {
        r = cur
      } else {
        l = cur + 1
      }
    }

    return l
  }
}
