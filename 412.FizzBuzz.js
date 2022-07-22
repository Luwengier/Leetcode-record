/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const r = []

  for (let i = 1; i <= n; i++) {
    let s = ''
    if (i % 3 === 0) { s += 'Fizz' }
    if (i % 5 === 0) { s += 'Buzz' }
    if (s.length === 0) { s += i }

    r.push(s)
  }

  return r
};