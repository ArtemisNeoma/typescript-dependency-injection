import calcCpfDigit from './calcCpfDigit'

const isCpfValid = (cpf: string): boolean => {
  let cpfArray = Array.from(cpf, Number)
  const confirmationDigits = cpfArray.slice(-2)
  cpfArray = cpfArray.slice(0, -2)
  const firstDigit = calcCpfDigit(cpfArray)
  if (firstDigit !== confirmationDigits[0]) return false
  cpfArray.push(firstDigit)
  if (calcCpfDigit(cpfArray, 0) !== confirmationDigits[1]) return false

  return true
}

export default isCpfValid
