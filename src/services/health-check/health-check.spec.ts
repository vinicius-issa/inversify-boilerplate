import { HealthCheckService } from './health-check'

describe('Health Check', () => {
  it('should return a HealthCheck', () => {
    const sut = new HealthCheckService()

    expect(sut.index()).toEqual({
      name: 'Project template',
      version: '1.0.0',
      author: 'Vinicius de Almeida Issa'
    })
  })
})