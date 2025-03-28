import { UnitOverview } from '@modules/interface/types/unit/overview'
import ZabbixItensParser from '@util/zabbix-itens-parser'
import { ZabbixItem } from 'src/shared/types/zabbix-api/zabbix-response'

/**
 * @description Maps Zabbix data to UnitOverview
 * @param zabbixData - Zabbix data to be mapped
 * @returns UnitOverview
 */

class UnitOverviewMapper extends ZabbixItensParser {
  constructor(itens: ZabbixItem[]) {
    super(itens)
  }

  private getDnsStatus(): boolean {
    return this.getItemAsBoolean('dns_status')
  }

  private getUptime(): string {
    return this.getItemAsString('uptime')
  }

  public toUnitOverview(): UnitOverview {
    return {
      uptime: this.getUptime(),
      dnsStatus: this.getDnsStatus(),
    } as UnitOverview
  }

  static toPage(zabbixData: ZabbixItem[]): UnitOverview {
    const mapper = new UnitOverviewMapper(zabbixData)
    return mapper.toUnitOverview()
  }
}

export default UnitOverviewMapper
