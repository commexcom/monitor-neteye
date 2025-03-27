import { Response, Request } from 'express'

import { ZabbixApiClient } from '@modules/interface/clients/zabbix-api/zabbix-api-client'
import { getUnitPageSchema } from '../data-schemas/get-unit-page-schema'

interface UnitControllerProps {
  zabbixApiClient: ZabbixApiClient
}

export class UnitController {
  private zabbixApiClient: ZabbixApiClient

  constructor(props: UnitControllerProps) {
    this.zabbixApiClient = props.zabbixApiClient
  }

  async getOverview(request: Request, response: Response) {
    const { lanId } = getUnitPageSchema.parse(request.query)

    return response.status(200).json()
  }

  async getInterfaces(request: Request, response: Response) {
    const { lanId } = getUnitPageSchema.parse(request.query)
    return response.status(200).json()
  }

  async getPerformance(request: Request, response: Response) {
    const { lanId } = getUnitPageSchema.parse(request.query)
    return response.status(200).json()
  }

  async getScripts(request: Request, response: Response) {
    const { lanId } = getUnitPageSchema.parse(request.query)
    return response.status(200).json()
  }
}
