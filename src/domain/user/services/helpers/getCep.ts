import axios from 'axios'

const getCep = async (value: string): Promise<object> => {
  try {
    const { status } = await axios.get(`https://cep.awesomeapi.com.br/json/${value}`)
    if (status === 200) return { result: true }
    return { result: true, msg: 'postal_code is not valid' }
  } catch (error) {
    return { result: false, msg: 'Error on validating postal_code' }
  }
}

export default getCep
