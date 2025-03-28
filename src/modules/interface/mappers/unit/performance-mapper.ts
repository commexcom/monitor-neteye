import { UnitPerformance } from '@modules/interface/types/unit/performance'
import { ZabbixItem } from 'src/shared/types/zabbix-api/zabbix-response'

class UnitPerformanceMapper {
  static toPage(items: ZabbixItem[]): UnitPerformance {
    return {} as UnitPerformance
  }
}

export default UnitPerformanceMapper
