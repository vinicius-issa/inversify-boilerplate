import "reflect-metadata";
import { injectable } from "inversify";

@injectable()
export class LoginService {
    indexTest(): any {
        return {
          data: {
            name: 'Vinicius'
          }
        }
    }
}