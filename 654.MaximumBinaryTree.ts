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

// 要提升效能可以不要用陣列操作，改設兩個數字變數來記錄該次function要操作nums的 startIndex 跟 endIndex
function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null;

  const index = fundMaxIndex(nums);
  const left = nums.splice(0, index + 1);

  return {
    val: left.pop()!,
    left: constructMaximumBinaryTree(left),
    right: constructMaximumBinaryTree(nums),
  };
}

function fundMaxIndex(nums: number[]): number {
  return nums.reduce((acc, cur, index) => {
    if (cur > nums[acc]) return index;
    return acc;
  }, 0);
}
