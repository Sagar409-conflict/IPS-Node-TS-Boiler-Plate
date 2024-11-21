export enum APIErrorCode {
  BAD_REQUEST = "BAD_REQUEST",
  UNAUTHORIZED = "UNAUTHORIZED",
  FORBIDDEN = "FORBIDDEN",
  NOT_FOUND = "NOT_FOUND",
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
}

export class APIError extends Error {
  statusCode: number;
  errorCode: APIErrorCode;
  isOperational: boolean;

  constructor(
    message: string,
    statusCode: number = 500,
    errorCode: APIErrorCode = APIErrorCode.INTERNAL_SERVER_ERROR,
    isOperational: boolean = true
  ) {
    super(message);

    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this, this.constructor);
  }
}
