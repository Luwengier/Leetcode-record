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

let inorderRoot = 0

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (postorder.length === 0) return null

  inorderRoot = inorder.findIndex((i) => i === postorder[postorder.length - 1])

  const newRightIn = inorder.splice(inorderRoot + 1)
  inorder.pop()

  const newRightPre = postorder.splice(inorder.length)

  return new TreeNode(
    newRightPre.pop(),
    buildTree(inorder, postorder),
    buildTree(newRightIn, newRightPre)
  )
}
