import 'reflect-metadata';
import { injectable } from 'inversify';

@injectable()
export class LoginService {
    indexTest(): { data: { name: string }} {
        return {
          data: {
            name: 'Vinicius'
          }
        }
    }
}