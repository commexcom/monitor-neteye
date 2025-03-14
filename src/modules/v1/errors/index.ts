import { AppError } from '@shared-errors/app-error'

export const INVALID_PARAMETER = (param: string) =>
  new AppError(`invalid ${param} parameter`, 400, `parameters.invalid.${param}`)

export const MISSING_PARAMETER = (param: string) =>
  new AppError(`missing ${param} parameter`, 400, `parameters.missing.${param}`)
