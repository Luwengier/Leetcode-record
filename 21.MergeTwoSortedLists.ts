class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let resultHead: ListNode | null = null
  let currentNode: ListNode | null = null
  let tempNode: ListNode | null = null

  let l1 = list1
  let l2 = list2

  if (l1 && (!l2 || l1.val <= l2.val)) {
    resultHead = currentNode = { ...l1 }
    l1 = l1.next
  } else if (l2 && (!l1 || l2.val < l1.val)) {
    resultHead = currentNode = { ...l2 }
    l2 = l2.next
  }

  while (currentNode && (l1 || l2)) {
    if (l1 && (!l2 || l1.val <= l2.val)) {
      tempNode = { ...l1 }
      currentNode.next = tempNode
      currentNode = tempNode

      l1 = l1.next
    }
    if (l2 && (!l1 || l2.val < l1.val)) {
      tempNode = { ...l2 }
      currentNode.next = tempNode
      currentNode = tempNode

      l2 = l2.next
    }
  }

  return resultHead
}
