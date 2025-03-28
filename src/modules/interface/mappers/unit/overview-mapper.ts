import { UnitOverview } from '@modules/interface/types/unit/overview'
import { ZabbixItem } from 'src/shared/types/zabbix-api/zabbix-response'

class UnitOverviewMapper {
  static toPage(items: ZabbixItem[]): UnitOverview {
    return {} as UnitOverview
  }
}

export default UnitOverviewMapper
