import { AppError } from 'src/shared/errors/app-error'
import logger from '@util/logger'
import { Request, Response, NextFunction } from 'express'
import { z } from 'zod'

const errorParserMiddleware = (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  logger.error(err)

  if (err instanceof z.ZodError) {
    const appError = new AppError(
      err.issues[0].message,
      400,
      'VALIDATION_ERROR'
    )

    return response.status(appError.statusCode).json({
      errCode: appError.errorCode,
      message: appError.message,
    })
  }

  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      errCode: err.errorCode,
      message: err.message,
    })
  }

  return response.status(500).json({
    errCode: 'INTERNAL_ERROR',
    message: 'Internal server error. Check logs for more details.',
  })
}

export default errorParserMiddleware
