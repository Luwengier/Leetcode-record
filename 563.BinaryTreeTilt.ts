class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function findTilt(root: TreeNode | null): number {
  if (!root) return 0;
  let result = 0;
  let distance = 0;

  function compare(node: TreeNode): number {
    const left = node.left ? compare(node.left) : 0;
    const right = node.right ? compare(node.right) : 0;

    distance = left - right;
    result += Math.abs(distance);

    return left + right + node.val;
  }

  compare(root);

  return result;
}
