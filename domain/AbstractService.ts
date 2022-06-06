import { IEndPointsRepository, IEndPointsService } from 'interfaces/domain'

export default abstract class AbstractService implements IEndPointsService {
  repository: IEndPointsRepository

  constructor (repository: IEndPointsRepository) {
    this.repository = repository
  }
}
