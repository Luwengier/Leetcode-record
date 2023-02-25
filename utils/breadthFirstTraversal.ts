//breadth-first search(BFS), level-order traversal
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

const breadthFirstTraversal = (root: TreeNode | null, callback: Function) => {
  if (!root) return

  let queue: TreeNode[] = [root]

  while (queue.length > 0) {
    let item = queue.shift()
    let val = item!.val
    callback(val)

    if (item!.left) {
      queue.push(item!.left)
    }
    if (item!.right) {
      queue.push(item!.right)
    }
  }
}
