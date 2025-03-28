import { AppError } from 'src/shared/errors/app-error'

export const INVALID_PARAMETER = (param: string) =>
  new AppError(
    `invalid ${param} parameter. check the docs`,
    400,
    `parameters.invalid.${param}`
  )

export const MISSING_PARAMETER = (param: string) =>
  new AppError(
    `missing ${param} parameter. check the docs`,
    400,
    `parameters.missing.${param}`
  )

export const PARSE_ZABBIX_ITEM_ERROR = new AppError(
  `error trying to parse zabbix item`,
  500,
  `ZABBIX.ITEM.PARSER`
)
