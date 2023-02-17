/**
 Definition for a binary tree node.
 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function minDiffInBST(root: TreeNode | null): number {
  const a: number[] = []

  function compareNode(n: TreeNode | null) {
    if (!n) return
    a.push(n.val)

    compareNode(n.left)
    compareNode(n.right)
  }

  compareNode(root)
  a.sort((a, b) => a - b)

  let s = a[0]
  let f = a[1]

  let d = s - f
  let c = d > 0 ? d : -d
  let r = c

  for (let i = 1; i < a.length - 1; i++) {
    s = a[i]
    f = a[i + 1]

    d = s - f
    c = d > 0 ? d : -d
    if (c < r) {
      r = c
    }
  }

  return r
}
