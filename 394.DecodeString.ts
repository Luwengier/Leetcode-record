function decodeString(s: string): string {
  let curIndex = 0
  let result: string[] = []
  const numReg = /[0-9]/

  const rep = (multi: number) => {
    const acc: string[] = []
    while (s[curIndex] !== ']') {
      if (s[curIndex] === '[') {
        curIndex++
        acc.push(rep(Number(acc.pop() || 0)))
      } else if (numReg.test(s[curIndex])) {
        let numString = s[curIndex]
        while (numReg.test(s[curIndex + 1])) {
          numString += s[curIndex + 1]
          curIndex++
        }
        s[curIndex + 1] === '[' && acc.push(numString)
        curIndex++
      } else {
        acc.push(s[curIndex])
        curIndex++
      }
    }
    curIndex++

    let r = ''
    for (let i = 0; i < multi; i++) {
      r += acc.join('')
    }
    return r
  }

  while (curIndex < s.length) {
    if (s[curIndex] === '[') {
      curIndex++
      result.push(rep(Number(result.pop() || 0)))
    } else if (numReg.test(s[curIndex])) {
      let numString = s[curIndex]
      while (numReg.test(s[curIndex + 1])) {
        numString += s[curIndex + 1]
        curIndex++
      }
      s[curIndex + 1] === '[' && result.push(numString)
      curIndex++
    } else {
      result.push(s[curIndex])
      curIndex++
    }
  }

  return result.join('')
}
