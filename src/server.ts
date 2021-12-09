import 'reflect-metadata';
import * as bodyParser from 'body-parser';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';

import TYPES from './types';
import './controllers/health-check'
import { PORT } from './constants'
import { HealthCheckService } from './services/health-check/health-check'

export class App {
  private readonly container: Container
  constructor() {
        this.container = new Container();
        this.configDependencies();
        this.createServer();
    }

    configDependencies(): void {
        this.container.bind<HealthCheckService>(TYPES.HealthCheck).to(HealthCheckService)
    }

    createServer(): void {
        const server: InversifyExpressServer = new InversifyExpressServer(this.container);
        server.setConfig((app) => {
          app.use(bodyParser.urlencoded({
              extended: true
          }));
          app.use(bodyParser.json());
          });

          const app = server.build();
          app.listen(PORT);
          console.log(`Server started at ${PORT}`)
    }

}

export default new App();