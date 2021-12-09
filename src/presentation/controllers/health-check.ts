import { inject } from 'inversify'
import { httpGet, interfaces, controller } from 'inversify-express-utils'

import TYPES from '../../types'

import { HealthCheckService } from '../../services/health-check/health-check'
import { HealthCheckResponse } from 'types/responses/health-check'

@controller('/health-check')
export class HealthCheckController implements interfaces.Controller {
  constructor(
    @inject(TYPES.HealthCheck)
    private readonly healthCheck: HealthCheckService
  ) {}

  @httpGet('/')
  public index(): HealthCheckResponse {
    return this.healthCheck.index()
  }
}
