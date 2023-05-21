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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return false
  let result = true

  function compare(node1: TreeNode | null, node2: TreeNode | null) {
    if (!result) return

    if (!node1 && !node2) {
      return
    } else if (node1 && node2 && node1.val === node2.val) {
      compare(node1.left, node2.right)
      compare(node1.right, node2.left)
    } else {
      result = false
      return
    }
  }

  compare(root.left, root.right)

  return result
}
