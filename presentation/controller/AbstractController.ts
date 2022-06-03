import { IEndPointsService } from 'interfaces/domain'
import { IEndPointsController } from 'interfaces/presentation'

export default abstract class AbstractController implements IEndPointsController {
  service: IEndPointsService

  constructor (service: IEndPointsService) {
    this.service = service
  }
}
