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

export const PARSE_ZABBIX_ITEM_ERROR = (key: string) =>
  new AppError(
    `error trying to parse zabbix item: ${key}`,
    500,
    `ZABBIX.ITEM.PARSER`
  )

export const PARSE_ZABBIX_ITEMID_ERROR = (key: string) =>
  new AppError(
    `error trying to parse zabbix item id: ${key}`,
    500,
    `ZABBIX.ITEM_ID.PARSER`
  )
