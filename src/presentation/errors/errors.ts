import { HttpError } from '../protocols/http-error'

export class BadRequestError implements HttpError {
  readonly status: number
  constructor(
    public readonly name: string,
    public readonly message: string,
    public readonly stack?: string
  ) {
    this.status = 400
  }
}