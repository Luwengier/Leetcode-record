const table = {
  '(': ')',
  '[': ']',
  '{': '}'
}

const endType = {
  ')': 1,
  ']': 1,
  '}': 1
}

function isValid(s: string): boolean {
  const stack: string[] = []

  for (let i = 0; i < s.length; i++) {
    if (endType[s[i]]) {
      if (s[i] === table[stack[stack.length - 1]]) {
        stack.pop()
      } else {
        return false
      }
    } else {
      stack.push(s[i])
    }
  }

  return stack.length === 0
}
