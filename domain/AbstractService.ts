import { IEndPointsRepository, IEndPointsService, IServiceValidationGroup } from 'interfaces/domain'

export default abstract class AbstractService implements IEndPointsService {
  repository: IEndPointsRepository
  validationGroup: Record<string, IServiceValidationGroup>

  constructor (repository: IEndPointsRepository, validationGroup: Record<string, IServiceValidationGroup>) {
    this.repository = repository
    this.validationGroup = validationGroup
  }
}
