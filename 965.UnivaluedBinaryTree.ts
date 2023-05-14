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

function isUnivalTree(root: TreeNode): boolean {
  let result = true;
  let cur: number = root.val;

  function dig(node: TreeNode | null) {
    if (!node || !result) return;
    if (node.val !== cur) {
      return (result = false);
    }
    dig(node.left);
    dig(node.right);
  }

  dig(root);
  return result;
}
