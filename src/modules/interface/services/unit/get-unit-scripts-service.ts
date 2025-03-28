import ZabbixApiClient from '@clients/zabbix/zabbix-api/zabbix-api-client'
import UnitScriptsMapper from '@modules/interface/mappers/unit/scripts-mapper'
import { UnitScripts } from '@modules/interface/types/unit/scripts'

interface GetUnitScriptsServiceProps {
  zabbixApiClient: ZabbixApiClient
}

class GetUnitScriptsService {
  private zabbixApiClient: ZabbixApiClient

  constructor(props: GetUnitScriptsServiceProps) {
    this.zabbixApiClient = props.zabbixApiClient
  }

  async execute(lanId: string): Promise<UnitScripts> {
    const LanItems = await this.zabbixApiClient.getHostItems(lanId)

    return UnitScriptsMapper.toPage(LanItems)
  }
}

export default GetUnitScriptsService
