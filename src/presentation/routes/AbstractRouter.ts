import { Router } from 'express'
import { IEndPointsRouter } from 'interfaces/presentation'

export default abstract class AbstractRouter implements IEndPointsRouter {
  router: Router

  constructor (router: Router) {
    this.router = router
  }

  protected abstract routes (): Promise<void>
}
