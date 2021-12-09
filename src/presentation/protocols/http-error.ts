export interface HttpError extends Error{
  status: number
  name: string;
  message: string;
  stack?: string;
}