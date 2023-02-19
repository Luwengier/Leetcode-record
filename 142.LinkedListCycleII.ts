class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// 快慢針
function detectCycle(head: ListNode | null) {
  let slow = head
  let fast = head
  while (fast && fast.next && fast.next.next) {
    slow = slow!.next
    fast = fast.next.next
    if (slow === fast) {
      slow = head
      while (slow !== fast) {
        slow = slow!.next
        fast = fast!.next
      }
      return slow
    }
  }
  return null
}

// Hash Table
// function detectCycle(head: ListNode | null): ListNode | null {
//   const m = new Map()
//   let cur: ListNode | null = head

//   while (cur) {
//     if (m.has(cur)) return cur

//     m.set(cur, 1)
//     cur = cur.next
//   }

//   return null
// }
