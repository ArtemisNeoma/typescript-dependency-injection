import { IRepositoryDatabase } from 'interfaces/domain'

export default class _databaseVariable implements IRepositoryDatabase {
  private _data: Map<number, object> = new Map<number, object>()

  async getNewIndex (): Promise<number> {
    const idArray = Object.keys(this._data).map(Number)
    if (idArray.length === 0) {
      return 0
    }
    return Math.max(...idArray) + 1
  }

  async create (entity: object): Promise<void> {
    this._data.set(await this.getNewIndex(), entity)
  }

  async read (id: number): Promise<undefined | object> {
    return this._data.get(id)
  }

  async readAll (): Promise<undefined | Map<number, object>> {
    return this._data
  }

  async update (id: number, newEntity: object): Promise<void> {
    this._data.set(id, newEntity)
  }

  async delete (id: number): Promise<void> {
    this._data.forEach((value, index) => {
      if (index === id) {
        this._data.delete(id)
      }
    })
  }
}
