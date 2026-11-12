// AppError.ts
// An error witn an TTP status code attached, e.g throw new AppError(404, "Product not found")
// errorHandler.ts replies with status and message.
// STEP 14: One place to handle errors

export class AppError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message); // let the normal Error store the message
    this.statusCode = statusCode;
  }
}
