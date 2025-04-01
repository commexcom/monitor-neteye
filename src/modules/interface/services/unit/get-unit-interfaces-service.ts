import ZabbixApiClient from '@clients/zabbix/zabbix-api/zabbix-api-client'
import UnitInterfacesMapper from '@modules/interface/mappers/unit/interfaces-mapper'
import { UnitInterfaces } from '@modules/interface/types/unit/interfaces'
import { findHostByLanid } from '@modules/interface/utils/find-host-by-lanid'

interface GetUnitInterfacesServiceProps {
  zabbixApiClient: ZabbixApiClient
}

export class GetUnitInterfacesService {
  private zabbixApiClient: ZabbixApiClient

  constructor(props: GetUnitInterfacesServiceProps) {
    this.zabbixApiClient = props.zabbixApiClient
  }

  async execute(lanId: string): Promise<UnitInterfaces> {
    const hosts = await this.zabbixApiClient.getHosts('20')

    const host = findHostByLanid(lanId, hosts)

    const lanItens = await this.zabbixApiClient.getHostItems(host.hostid)

    return UnitInterfacesMapper.toPage(lanItens)
  }
}
