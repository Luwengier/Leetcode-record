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

function isValidBST(root: TreeNode | null): boolean {
  if (!root) return false

  let r = true
  const h: Record<number, boolean> = {}

  const unitValidate = (n: TreeNode, min?: number, max?: number) => {
    if (!r) return
    console.log(n.val)
    console.log('max', max)
    console.log('min', min)

    let newMax = Math.max(n.val, max || n.val)
    let newMin = Math.min(n.val, min || n.val)

    // if ((min && n.val < min) || (max && n.val > max)) {
    //   r = false
    //   return
    // }
    // 是否重複
    if (h[n.val]) {
      r = false
      return
    }
    h[n.val] = true
    // 左子樹小 右子樹大
    if (n.left) {
      if (n.left.val > newMin) {
        r = false
        return
      }
      if (n.left.val < n.val) {
        unitValidate(n.left, min, Math.max(max || n.val, n.val))
      } else {
        r = false
        return
      }
    }

    if (n.right) {
      if (n.right.val > newMax) {
        r = false
        return
      }
      if (n.right.val > n.val) {
        unitValidate(n.right, Math.min(n.val, min || n.val), max)
      } else {
        r = false
        return
      }
    }
  }
  unitValidate(root)
  return r
}
