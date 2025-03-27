import ZabbixApiClient from '@modules/interface/clients/zabbix-api/zabbix-api-client'
import UnitPerformanceMapper from '@modules/interface/mappers/unit/performance-mapper'
import { UnitPerformance } from '@modules/interface/types/unit/performance'

interface GetUnitPerformanceServiceProps {
  zabbixApiClient: ZabbixApiClient
}

export class GetUnitPerformanceService {
  private zabbixApiClient: ZabbixApiClient

  constructor(props: GetUnitPerformanceServiceProps) {
    this.zabbixApiClient = props.zabbixApiClient
  }

  async execute(lanId: string): Promise<UnitPerformance> {
    const LanItems = await this.zabbixApiClient.getHostItems(lanId)

    return UnitPerformanceMapper.toPage(LanItems)
  }
}
