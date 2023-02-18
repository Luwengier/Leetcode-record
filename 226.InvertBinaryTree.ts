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

function invertTree(root: TreeNode | null): TreeNode | null {
  let leftTemp: TreeNode | null = null

  function invertNode(n: TreeNode | null) {
    if (!n) return
    leftTemp = n.left

    n.left = n.right
    n.right = leftTemp

    invertNode(n.left)
    invertNode(n.right)
  }

  invertNode(root)

  return root
}

// function invertTree(root: TreeNode | null): TreeNode | null {
//   const numCollection: (number | null)[][] = [[root ? root.val : null]]
//   const collection: (TreeNode | null)[][] = [[root]]

//   const padLayer = (nodes: (TreeNode | null)[]) => {
//     const nums: (number | null)[] = []
//     const newNodes: (TreeNode | null)[] = []
//     let nullCount = 0

//     nodes.forEach((n) => {
//       if (n?.left) {
//         nums.push(n.left.val)
//         newNodes.push(n.left)
//       } else {
//         nums.push(null)
//         newNodes.push(null)
//         nullCount += 1
//       }

//       if (n?.right) {
//         nums.push(n.right.val)
//         newNodes.push(n.right)
//       } else {
//         nums.push(null)
//         newNodes.push(null)
//         nullCount += 1
//       }
//     })

//     if (nullCount < nodes.length * 2) {
//       numCollection.push(nums)
//       collection.push(newNodes)

//       padLayer(newNodes)
//     }
//   }

//   padLayer([root])

//   console.log('numCollection', numCollection)
//   console.log('collection', collection)

//   return {
//     val: 0,
//     right: null,
//     left: null,
//   }
// }
