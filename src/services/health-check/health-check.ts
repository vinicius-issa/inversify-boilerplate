import 'reflect-metadata';
import { injectable } from 'inversify';
import { HealthCheckResponse } from '../../types/responses/health-check'

@injectable()
export class HealthCheckService {
    index(): HealthCheckResponse {
        return {
          name: 'Project template',
          version: '1.0.0',
          author: 'Vinicius de Almeida Issa'
        }
    }
}