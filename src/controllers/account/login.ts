import { inject } from 'inversify';
import { httpGet, interfaces, controller } from 'inversify-express-utils';

import TYPES from '../../types';

import { LoginService } from '../../services/account/login';


@controller('/login')
export class LoginController implements interfaces.Controller {

    constructor(
        @inject(TYPES.LoginService)
        private readonly loginService: LoginService
    ) {}

    @httpGet('/')
    public index(): { data: { name: string }} {
        return this.loginService.indexTest();
    }
}