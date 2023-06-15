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

function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []

  const traversal = (node: TreeNode | null) => {
    if (!node) return

    result.push(node.val)
    traversal(node.left)
    traversal(node.right)
  }

  traversal(root)

  return result
}

// 忽略時間與記憶體效能 只追求好看的寫法
// function preorderTraversal(root: TreeNode | null): number[] {
//   return root ? [
//     root.val,
//     ...preorderTraversal(root.left),
//     ...preorderTraversal(root.right),
//   ] : []
// }
