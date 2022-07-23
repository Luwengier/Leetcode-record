/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let counter = 0
  while (num > 0) {
    (num % 2)
      ? (num--)
      : (num = num / 2)
    counter++
  }

  return counter
};