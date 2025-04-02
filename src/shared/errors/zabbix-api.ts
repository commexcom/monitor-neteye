import { AppError } from 'src/shared/errors/app-error'

export const ZABBIX_API_CONFIG_ERROR = new AppError(
  'Zabbix API URL is required.',
  400,
  'ZABBIX_API.CONFIG_ERROR'
)

export const ZABBIX_API_INVALID_PARAMETERS = new AppError(
  'Username and password are required.',
  400,
  'ZABBIX_API.INVALID_CREDENTIALS'
)

export const ZABBIX_API_MISSING_AUTHENTICATION = new AppError(
  'Authentication is required.',
  401,
  'ZABBIX_API.MISSING_AUTHENTICATION'
)

export const ZABBIX_API_AUTHORIZATION_ERROR = new AppError(
  'Could not authorize on zabbix api.',
  500,
  'ZABBIX_API.UNAUTHORIZED'
)

export const ZABBIX_API_FETCHINGHOSTS_ERROR = new AppError(
  'Could not get hosts from zabbix api.',
  500,
  'ZABBIX_API.HOSTS_FETCHING_ERROR'
)

export const ZABBIX_API_FETCHINGITEMS_ERROR = new AppError(
  'Could not get items from zabbix api.',
  500,
  'ZABBIX_API.HOSTS_FETCHING_ERROR'
)

export const ZABBIX_API_FETCHING_HISTORY_ERROR = new AppError(
  'Could not get hisoty of items from zabbix api.',
  500,
  'ZABBIX_API.HISTORY_FETCHING_ERROR'
)
