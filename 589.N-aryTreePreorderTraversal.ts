class NodeTree {
  val: number
  children: NodeTree[]
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val
    this.children = []
  }
}

function preorder(root: NodeTree | null): number[] {
  const result: number[] = []
  function traverse(tree: NodeTree | null) {
    if (!tree) {
      return result
    }
    result.push(tree.val)
    for (let i = 0; i < tree.children.length; i++) {
      traverse(tree.children[i])
    }
    return result
  }
  return traverse(root)
}
