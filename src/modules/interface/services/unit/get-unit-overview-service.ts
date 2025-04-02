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

    const unitOverviewMapper = new UnitOverviewMapper(
      Number(lanId),
      host,
      lanItems
    )
    const yesterdayDate = new Date(Date.now() - 24 * 60 * 60 * 1000)
    const todayDate = new Date(Date.now())
    const firstDayOfMonth = new Date(
      todayDate.getFullYear(),
      todayDate.getMonth(),
      1
    )

    const pingHistory = await this.zabbixApiClient.getItemHistory(
      unitOverviewMapper.getItemId('maxPing'),
      0,
      firstDayOfMonth,
      todayDate
    )

    const uploadHistory = await this.zabbixApiClient.getItemHistory(
      unitOverviewMapper.getItemId('interface.tx.5'),
      0,
      yesterdayDate,
      todayDate
    )

    const downloadHistory = await this.zabbixApiClient.getItemHistory(
      unitOverviewMapper.getItemId('interface.rx.5'),
      0,
      yesterdayDate,
      todayDate
    )

    unitOverviewMapper.setUpload(uploadHistory)
    unitOverviewMapper.setDownload(downloadHistory)
    unitOverviewMapper.setDisponibility(pingHistory)

    return unitOverviewMapper.toUnitOverview()
  }
}
