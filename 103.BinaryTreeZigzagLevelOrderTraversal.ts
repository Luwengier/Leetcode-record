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

// Best
const zigzagLevelOrder = (root: TreeNode | null): number[][] => {
  let res: number[][] = []

  const go = (node: TreeNode | null, lvl: number) => {
    if (node == null) return
    if (res[lvl] == null) res[lvl] = []

    if (lvl % 2 === 0) {
      res[lvl].push(node.val)
    } else {
      res[lvl].unshift(node.val)
    }

    go(node.left, lvl + 1)
    go(node.right, lvl + 1)
  }

  go(root, 0)
  return res
}

// BFS
// const zigzagLevelOrder = function (root: TreeNode | null): number[][] {
//   if (!root) return []
//   let queue = [root]
//   let output: number[][] = []
//   let deep = 0
//   while (queue.length > 0) {
//     const size = queue.length
//     const level: number[] = []

//     for (let i = 0; i < size; i++) {
//       const node = queue.shift()
//       if (deep % 2 == 0) level.push(node!.val)
//       else level.unshift(node!.val)

//       if (node!.left) queue.push(node!.left)
//       if (node!.right) queue.push(node!.right)
//     }
//     output.push(level)
//     deep++
//   }

//   return output
// }

// Self
// function zigzagLevelOrder(root: TreeNode | null): number[][] {
//   const r: number[][] = root ? [[root.val]] : []
//   let curNums: number[]
//   let curLayer: (TreeNode | null)[]
//   let isVerse = true

//   const pad = (nodes: (TreeNode | null)[], isVerse: boolean) => {
//       if (nodes.length <= 0) return
//       curNums = []
//       curLayer = []
//       nodes.forEach(n => {
//           if(n?.left) {
//               isVerse ? curNums.unshift(n.left.val) : curNums.push(n.left.val)
//               curLayer.push(n.left)
//           }
//           if(n?.right) {
//               isVerse ? curNums.unshift(n.right.val) : curNums.push(n.right.val)
//               curLayer.push(n.right)
//           }
//       })

//       if (curLayer.length > 0) {
//           r.push(curNums)
//           pad(curLayer, !isVerse)
//       }
//   }
//   pad(root? [root] : [], isVerse)

//   return r
// }
