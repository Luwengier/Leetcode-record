class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let o: ListNode | null = head
  let c: ListNode | null = null
  let p: ListNode | null = null

  while (o) {
    p = c
    c = {
      val: o.val,
      next: p,
    }

    o = o.next
  }

  return c
}
