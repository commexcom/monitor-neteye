import ZabbixApiClient from '@modules/interface/clients/zabbix-api/zabbix-api-client'
import UnitOverviewMapper from '@modules/interface/mappers/unit/overview-mapper'
import { UnitOverview } from '@modules/interface/types/unit/overview'

interface GetUnitOverviewServiceProps {
  zabbixApiClient: ZabbixApiClient
}

export class GetUnitOverviewService {
  private zabbixApiClient: ZabbixApiClient

  constructor(props: GetUnitOverviewServiceProps) {
    this.zabbixApiClient = props.zabbixApiClient
  }

  async execute(lanId: string): Promise<UnitOverview> {
    const LanItems = await this.zabbixApiClient.getHostItems(lanId)

    return UnitOverviewMapper.toPage(LanItems)
  }
}
