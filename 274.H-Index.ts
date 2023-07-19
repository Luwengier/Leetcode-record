function hIndex(citations: number[]): number {
  const result = citations
    .sort((a, b) => b - a)
    .findIndex((el, index) => el <= index)

  return result < 0 ? citations.length : result
}

// one-liner 但效能差一點
// function hIndex(citations: number[]): number {
//   return citations.sort((a, b) => b - a).filter((el, index) => el > index)
//     .length
// }
