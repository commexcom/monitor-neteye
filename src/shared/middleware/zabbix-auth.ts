import { Request, Response, NextFunction } from 'express'
import configs from '@config/index'
import { zabbixApi } from '../clients/zabbix/zabbix-api'

const zabbixAuthMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    await zabbixApi.authorize(
      configs.zabbixApiUsername,
      configs.zabbixApiPassword
    )
    next()
  } catch (error) {
    next(error) // Passa o erro para o tratador de erros do Express
  }
}

export default zabbixAuthMiddleware
