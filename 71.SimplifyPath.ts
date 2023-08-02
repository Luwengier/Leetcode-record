function simplifyPath(path: string): string {
  const snippets = path.split('/')
  const stack: string[] = []

  snippets.forEach((s, index) => {
    s !== '..' && s !== '.' && s !== '' && stack.push(s)
    s === '..' && stack.pop()
  })

  return '/' + stack.join('/')
}
