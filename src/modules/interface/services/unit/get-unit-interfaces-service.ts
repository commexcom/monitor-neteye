import ZabbixApiClient from '@modules/interface/clients/zabbix-api/zabbix-api-client'
import UnitInterfacesMapper from '@modules/interface/mappers/unit/interfaces-mapper'
import OverviewMapper from '@modules/interface/mappers/unit/overview-mapper'

interface GetUnitInterfacesServiceProps {
  zabbixApiClient: ZabbixApiClient
}

export class GetUnitInterfacesService {
  private zabbixApiClient: ZabbixApiClient

  constructor(props: GetUnitInterfacesServiceProps) {
    this.zabbixApiClient = props.zabbixApiClient
  }

  async execute(lanId: string): Promise<UnitInterfaces> {
    const LanItems = await this.zabbixApiClient.getHostItems(lanId)

    return UnitInterfacesMapper.toPage(LanItems)
  }
}
