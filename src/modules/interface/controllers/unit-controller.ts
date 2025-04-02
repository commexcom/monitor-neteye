import { Response, Request } from 'express'

import { getUnitPageSchema } from '@interface/data-schemas/get-unit-page-schema'
import { GetUnitInterfacesService } from '@interface/services/unit/get-unit-interfaces-service'
import ZabbixApiClient from '@clients/zabbix/zabbix-api/zabbix-api-client'
import { GetUnitOverviewService } from '../services/unit/get-unit-overview-service'
import { GetUnitPerformanceService } from '../services/unit/get-unit-performance-service'
import GetUnitScriptsService from '../services/unit/get-unit-scripts-service'

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

    const getUnitOverviewService = new GetUnitOverviewService({
      zabbixApiClient: this.zabbixApiClient,
    })

    const unitOverview = await getUnitOverviewService.execute(lanId)

    return response.status(200).json(unitOverview)
  }

  async getInterfaces(request: Request, response: Response) {
    const { lanId } = getUnitPageSchema.parse(request.query)

    const getUnitInterfacesService = new GetUnitInterfacesService({
      zabbixApiClient: this.zabbixApiClient,
    })

    const unitInterfaces = await getUnitInterfacesService.execute(lanId)

    return response.status(200).json(unitInterfaces)
  }

  async getPerformance(request: Request, response: Response) {
    const { lanId } = getUnitPageSchema.parse(request.query)

    const getUnitPerformanceService = new GetUnitPerformanceService({
      zabbixApiClient: this.zabbixApiClient,
    })

    const unitPerformance = await getUnitPerformanceService.execute(lanId)

    return response.status(200).json(unitPerformance)
  }

  async getScripts(request: Request, response: Response) {
    const { lanId } = getUnitPageSchema.parse(request.query)

    const getUnitScriptsService = new GetUnitScriptsService({
      zabbixApiClient: this.zabbixApiClient,
    })

    const unitScripts = await getUnitScriptsService.execute(lanId)

    return response.status(200).json(unitScripts)
  }
}
