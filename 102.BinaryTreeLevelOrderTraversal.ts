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

function levelOrder(root: TreeNode | null): number[][] {
  let res: number[][] = []

  const go = (node: TreeNode | null, lvl: number) => {
    if (node == null) return
    if (res[lvl] == null) res[lvl] = []

    res[lvl].push(node.val)

    go(node.left, lvl + 1)
    go(node.right, lvl + 1)
  }

  go(root, 0)
  return res
}
