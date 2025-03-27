import { UnitOverview } from '../../types/unit/overview'
import { ZabbixItem } from '../../types/zabbix-api/zabbix-response'

class UnitInterfacesMapper {
  static toPage(items: ZabbixItem[]): UnitInterfaces {
    return {} as UnitInterfaces
  }
}

export default UnitInterfacesMapper
