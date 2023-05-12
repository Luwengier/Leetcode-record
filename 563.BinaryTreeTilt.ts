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
  let result = 0;

  function compare(node: TreeNode | null): number {
    if (!node) return 0;
    const left = compare(node.left);
    const right = compare(node.right);

    result += Math.abs(left - right);
    return left + right + node.val;
  }

  compare(root);

  return result;
}
