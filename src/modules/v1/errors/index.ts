import { AppError } from '@shared-errors/app-error'

export const INVALID_RESPONSE_SOME_API = new AppError(
  'Could not get data from some api',
  500,
  'SOME_API.GET_SOMETHING.INVALID_RESPONSE'
)

export const MISSING_NAME_PARAMETER = new AppError(
  'missing document parameter',
  400,
  'customer.missing.document'
)

export const INVALID_DOCUMENT_PARAMETER = new AppError(
  'Invalid document parameter',
  400,
  'customer.invalid.document'
)

export const MISSING_DOCUMENT_PARAMETER = new AppError(
  'missing document parameter',
  400,
  'customer.missing.document'
)
