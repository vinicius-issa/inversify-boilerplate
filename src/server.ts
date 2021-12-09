import 'reflect-metadata'
import * as bodyParser from 'body-parser'
import { Container } from 'inversify'
import { InversifyExpressServer } from 'inversify-express-utils'
import { Request, Response } from 'express'
import TYPES from './types'
import './presentation/controllers/health-check'
import { PORT } from './constants'
import { HealthCheckService } from './services/health-check/health-check'
import { HttpError } from 'presentation/protocols/http-error'

export class App {
  private readonly container: Container
  constructor() {
    this.container = new Container()
    this.configDependencies()
    this.createServer()
  }

  configDependencies(): void {
    this.container
      .bind<HealthCheckService>(TYPES.HealthCheck)
      .to(HealthCheckService)
  }

  createServer(): void {
    const server: InversifyExpressServer = new InversifyExpressServer(
      this.container
    )
    server.setConfig((app) => {
      app.use(
        bodyParser.urlencoded({
          extended: true,
        })
      )
      app.use(bodyParser.json())
    })

    server.setErrorConfig((app) => {
      app.use((err: HttpError, req: Request, res: Response, next: () => void) => {
        if (err.status) {
          res.status(err.status).json({
            name: err.name,
            message: err.message,
          })
        }
        else {
            console.log(err)
            res.status(err.status || 500).json({
                name: 'Internal Server Error',
                message: 'Internal Server Error',
            })
        }
        next()
      })
    })
    const app = server.build()
    app.listen(PORT)
    console.log(`Server started at ${PORT}`)
  }
}

export default new App()
