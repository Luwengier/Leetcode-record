class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function hasCycle(head: ListNode | null): boolean {
  let result = false
  let slow = head?.next
  let fast = head?.next?.next

  while (slow && fast && !result) {
    if (slow === fast) {
      result = true
    }

    slow = slow.next
    fast = fast.next?.next
  }

  return result
}
