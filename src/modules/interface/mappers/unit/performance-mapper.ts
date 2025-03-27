import { UnitPerformance } from '@modules/interface/types/unit/performance'
import { UnitOverview } from '../../types/unit/overview'
import { ZabbixItem } from '../../types/zabbix-api/zabbix-response'

class UnitPerformanceMapper {
  static toPage(items: ZabbixItem[]): UnitPerformance {
    return {} as UnitPerformance
  }
}

export default UnitPerformanceMapper
