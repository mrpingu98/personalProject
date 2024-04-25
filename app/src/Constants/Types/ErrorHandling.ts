export type CustomError = {
    defaultErrorMessage: string,
    status: number,
    statusText: string,
    customErrorMessage?: string | object
  }