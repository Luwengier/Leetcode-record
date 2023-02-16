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

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0
  let max = 1

  function findThisDepth(node: TreeNode | null, curDepth: number) {
    if (!node) return
    if (curDepth > max) {
      max = curDepth
    }

    if (node.left) {
      findThisDepth(node.left, curDepth + 1)
    }
    if (node.right) {
      findThisDepth(node.right, curDepth + 1)
    }
  }

  findThisDepth(root, max)

  return max
}
