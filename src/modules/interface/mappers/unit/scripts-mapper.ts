import { UnitScripts } from '@modules/interface/types/unit/scripts'
import { ZabbixItem } from 'src/shared/types/zabbix-api/zabbix-response'

class UnitScriptsMapper {
  static toPage(items: ZabbixItem[]): UnitScripts {
    return {} as UnitScripts
  }
}

export default UnitScriptsMapper
