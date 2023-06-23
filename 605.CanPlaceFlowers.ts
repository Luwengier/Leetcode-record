function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let result = false
  let counter = 0
  let acc = 1
  let startIndex = 0

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      startIndex = i
      acc = 1

      while (flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
        i++
        acc++
      }

      counter +=
        startIndex === 0 && i === flowerbed.length - 1
          ? Math.ceil(acc / 2)
          : Math.floor(
              (startIndex === 0 || i === flowerbed.length - 1 ? acc : acc - 1) /
                2
            )
    }

    if (counter >= n) return true
  }

  return result
}
