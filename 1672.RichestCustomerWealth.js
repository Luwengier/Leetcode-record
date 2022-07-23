/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  return accounts
    .map(i => i.reduce((prev, cur) => prev + cur), 0)
    .sort((a, b) => b - a)
  [0]
};