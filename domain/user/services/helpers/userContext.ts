import { IServiceContext } from '@interfaces/domain'

const userCreateContext: IServiceContext = {
  full_name: {
    min: 1,
    max: 256
  },
  email: {},
  cpf: {
    min: 11,
    max: 11
  },
  cellphone: {
    min: 11,
    max: 11
  },
  birthdate: {
    max: 'now'
  },
  country: {
    min: 1,
    max: 128
  },
  city: {
    min: 1,
    max: 128
  },
  postal_code: {
    min: 8,
    max: 8
  },
  address: {
    min: 1,
    max: 256
  }
}

export default userCreateContext
