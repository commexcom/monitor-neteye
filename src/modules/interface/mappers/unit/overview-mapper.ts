import { UnitOverview } from '../../types/unit/overview'
import { ZabbixItem } from '../../types/zabbix-api/zabbix-response'

class UnitOverviewMapper {
  static toPage(items: ZabbixItem[]): UnitOverview {
    return {} as UnitOverview
  }
}

export default UnitOverviewMapper
