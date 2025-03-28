import ZabbixApiClient from '@clients/zabbix/zabbix-api/zabbix-api-client'
import UnitOverviewMapper from '@modules/interface/mappers/unit/overview-mapper'
import { UnitOverview } from '@modules/interface/types/unit/overview'
import { findHostByLanid } from '@modules/interface/utils/find-host-by-lanid'

interface GetUnitOverviewServiceProps {
  zabbixApiClient: ZabbixApiClient
}

export class GetUnitOverviewService {
  private zabbixApiClient: ZabbixApiClient

  constructor(props: GetUnitOverviewServiceProps) {
    this.zabbixApiClient = props.zabbixApiClient
  }

  async execute(lanId: string): Promise<UnitOverview> {
    const hosts = await this.zabbixApiClient.getHosts('20')

    const host = findHostByLanid(lanId, hosts)

    const lanItems = await this.zabbixApiClient.getHostItems(host.hostid)

    return UnitOverviewMapper.toPage(lanItems)
  }
}
