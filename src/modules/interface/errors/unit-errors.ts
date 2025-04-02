import { AppError } from '@shared-errors/app-error'

export const UNIT_HOST_NOT_FOUND = new AppError(
  'lanId not found on zabbix hosts',
  404,
  'UNIT_HOST_NOT_FOUND'
)
