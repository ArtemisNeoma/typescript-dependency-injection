import calcCpfDigit from './calcCpfDigit';

const isCpfValid = (cpf: string): void => {
  let cpfArray = Array.from(cpf, Number);
  for (let i = 1; i < cpfArray.length; i++) {
    if (cpfArray[i] !== cpfArray[0]) {
      break;
    } else if (i === cpfArray.length - 1) {
      throw new Error('CPF inválido');
    }
  }
  const confirmationDigits = cpfArray.slice(-2);
  cpfArray = cpfArray.slice(0, -2);
  const firstDigit = calcCpfDigit(cpfArray);
  if (firstDigit !== confirmationDigits[0]) {
    throw new Error('cpf is not valid');
  }
  cpfArray.push(firstDigit);
  if (calcCpfDigit(cpfArray, 0) !== confirmationDigits[1]) {
    throw new Error('cpf is not valid');
  }
};

export default isCpfValid;
