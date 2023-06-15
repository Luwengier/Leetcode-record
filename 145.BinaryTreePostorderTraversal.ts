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

function postorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []

  const traversal = (node: TreeNode | null) => {
    if (!node) return

    traversal(node.left)
    traversal(node.right)
    result.push(node.val)
  }

  traversal(root)

  return result
}
