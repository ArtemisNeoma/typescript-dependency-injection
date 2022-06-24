const calcCpfDigit = (cpfArray: number[], start:number = 1): number => cpfArray.reduce((
  previousValue: number,
  currentValue: number,
  currentIndex: number
) => {
  const totalSum = previousValue + (currentValue * (currentIndex + start))
  return totalSum
}, 0) % 11

export default calcCpfDigit
