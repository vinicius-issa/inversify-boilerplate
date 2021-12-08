import "reflect-metadata";
import * as bodyParser from 'body-parser';
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";

import TYPES from "./types";

import './controllers/account/login'
import { LoginService } from './services/account/login'


export class App {
  private readonly container: Container
  constructor() {
        this.container = new Container();
        this.configDependencies();
        this.createServer();
    }

    configDependencies(): void {
        this.container.bind<LoginService>(TYPES.LoginService).to(LoginService)
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
          app.listen(5000);
          console.log("Server started at 5000")
    }

}

export default new App();