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

function binaryTreePaths(root: TreeNode | null): string[] {
  const result: string[] = [];
  if (!root) return result;

  function accumulation(acc: string, node: TreeNode) {
    if (!node.left && !node.right) {
      result.push(acc + node.val);
      return;
    }

    if (node.left) {
      accumulation(acc + node.val + '->', node.left);
    }
    if (node.right) {
      accumulation(acc + node.val + '->', node.right);
    }
  }

  accumulation('', root);
  return result;
}
