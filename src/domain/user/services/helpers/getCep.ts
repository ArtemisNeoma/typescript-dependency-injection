import axios from 'axios'
import Joi from 'joi'

const getCep = async (value: string): Promise<undefined> => {
  try {
    const { status } = await axios.get(`https://cep.awesomeapi.com.br/json/${value}`)
    if (status === 200) return undefined
  } catch (error) {
    throw new Joi.ValidationError(
      'postal_code.invalid',
      [
        {
          message: 'postal_code.invalid',
          path: ['postal_code'],
          type: 'postal_code.invalid',
          context: {
            key: 'postal_code',
            label: 'postal_code',
            value
          }
        }
      ],
      value
    )
  }
}

export default getCep
