const isCpfValid = (cpf: string): boolean => {
  let cpfArray = Array.from(cpf, Number)
  const confirmationDigits = cpfArray.slice(-2)
  cpfArray = cpfArray.slice(0, -2)
  const calcDigit = (start:number = 1): number => cpfArray.reduce((
    previousValue: number,
    currentValue: number,
    currentIndex: number
  ) => {
    const totalSum = previousValue + (currentValue * (currentIndex + start))
    return totalSum
  }, 0) % 11

  const firstDigit = calcDigit()
  if (firstDigit !== confirmationDigits[0]) return false
  cpfArray.push(firstDigit)
  if (calcDigit(0) !== confirmationDigits[1]) return false

  return true
}

export default isCpfValid
