//breadth-first search(BFS), level-order traversal
class Tree {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

const breadthFirstTraversal = (root: Tree | null, callback: Function) => {
  if (!root) return

  let queue: Tree[] = [root]

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
