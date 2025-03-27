import configs from '@config/index'
import { ZabbixApiClient } from '@modules/collector/clients/zabbix/zabbix-api/zabbix-api-client'

const zabbixApi = new ZabbixApiClient(configs.zabbixApiUrl)

export { zabbixApi }
