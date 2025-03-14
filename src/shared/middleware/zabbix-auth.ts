import { Request, Response, NextFunction } from 'express'
import { zabbixApi } from '../clients/zabbix-api'
import configs from '@config/index'

const zabbixAuthMiddleware = async (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  await zabbixApi
    .authorize(configs.zabbixApiUsername, configs.zabbixApiPassword)
    .catch((error) => {
      next(error)
    })

  next()
}

export default zabbixAuthMiddleware
