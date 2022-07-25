/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

  let carry = 0
  let temp = 0
  let prev = null
  let cur = null
  let r = null

  do {
    temp = (l1?.val || 0) + (l2?.val || 0) + carry
    carry = (temp >= 10) ? 1 : 0

    cur = {
      val: temp % 10
    }
    prev
      ? prev.next = cur
      : r = cur

    prev = cur
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
  } while (l1 || l2 || carry)
  cur.next = null

  return r
};