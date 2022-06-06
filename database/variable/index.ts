import { IRepositoryDatabase } from 'interfaces/domain'

export default class DatabaseVariable implements IRepositoryDatabase {
  private data: Array<object> = []

  async create (entity: object): Promise<void> {
    this.data.push(entity)
  }

  async read (id: number): Promise<void | object> {
    return this.data.at(id)
  }

  async readAll (): Promise<void | object> {
    return this.data
  }

  async update (id: number, newEntity: object): Promise<void> {
    this.data[id] = newEntity
  }

  async delete (id: number): Promise<void> {
    this.data.forEach((value, index) => {
      if (index === id) {
        this.data.splice(index, 1)
      }
    })
  }
}
