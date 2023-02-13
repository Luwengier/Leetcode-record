/**
 * @param {string} s
 * @return {string}
 */

function getPalinSym(s, i) {
  let fast = Math.ceil(i)
  let slow = Math.floor(i)

  while(s[fast] && s[fast] === s[slow]) {
      fast += 1
      slow -= 1
  } 

  return s.slice(slow + 1, fast)
}


var longestPalindrome = function(s) {
  let r = s[0]
  let t = ''

  for(i = 0; i <= s.length; i++) {
      if(s[i] === s[i+1]) {
          t = getPalinSym(s, i+0.5)
          if(t.length > r.length) r = t
      } 
      if (s[i] === s[i+2]) {
          t = getPalinSym(s, i+1)
          if(t.length > r.length) r = t
      }
  }

  return r
};