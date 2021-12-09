import { HttpError } from '../protocols/http-error'

export class BadRequestError implements HttpError {
  readonly status: number
  readonly name: string
  constructor(
    public readonly message: string
  ) {
    this.status = 400
    this.name = 'BadRequestError'
  }
}