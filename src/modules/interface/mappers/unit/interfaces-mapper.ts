import { ZabbixItem } from 'src/shared/types/zabbix-api/zabbix-response'

class UnitInterfacesMapper {
  static toPage(items: ZabbixItem[]): UnitInterfaces {
    return {} as UnitInterfaces
  }
}

export default UnitInterfacesMapper
