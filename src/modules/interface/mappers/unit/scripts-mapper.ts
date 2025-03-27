import { UnitScripts } from '@modules/interface/types/unit/scripts'
import { UnitOverview } from '../../types/unit/overview'
import { ZabbixItem } from '../../types/zabbix-api/zabbix-response'

class UnitScriptsMapper {
  static toPage(items: ZabbixItem[]): UnitScripts {
    return {} as UnitScripts
  }
}

export default UnitScriptsMapper
