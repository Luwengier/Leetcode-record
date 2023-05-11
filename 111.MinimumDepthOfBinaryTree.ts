/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

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

function minDepth(root: TreeNode | null): number {
  if (!root) return 0;

  let pool: TreeNode[] | null = [root];
  let min = 1;

  function checkBreadth(nodes: TreeNode[]) {
    pool = [];
    nodes.find((node) => {
      if (!node.left && !node.right) {
        pool = null;
        return true;
      }
      node.left && pool!.push(node.left);
      node.right && pool!.push(node.right);
    });
    if (!pool || pool.length === 0) return;
    min++;
    checkBreadth(pool);
  }

  checkBreadth(pool);

  return min;
}
