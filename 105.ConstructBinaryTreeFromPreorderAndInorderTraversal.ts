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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0) return null

  inorderRoot = inorder.findIndex((i) => i === preorder[0])

  const newRightIn = inorder.splice(inorderRoot + 1)
  inorder.pop()

  const newRightPre = preorder.splice(inorder.length + 1)

  return new TreeNode(
    preorder.shift(),
    buildTree(preorder, inorder),
    buildTree(newRightPre, newRightIn)
  )
}
