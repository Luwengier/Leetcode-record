/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
// var kWeakestRows = function(M, K) {
//     let y = M.length, x = M[0].length,
//         vis = new Uint8Array(y), ans = []
//     for (let j = 0; j <= x; j++)
//         for (let i = 0; i < y; i++) {
//             if (!vis[i] && !M[i][j]) ans.push(i), vis[i]++
//             if (ans.length === K) return ans
//         }
// };
var kWeakestRows = function (mat, k) {
  const h = {}

  mat.forEach((i, index) => {
    h[index] = i.reduce((prev, cur) => prev + cur, 0)
  })

  return Object.keys(h)
    .sort((a, b) => h[a] - h[b])
    .slice(0, k)
};