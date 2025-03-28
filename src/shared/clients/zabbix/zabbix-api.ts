import configs from '@config/index'
import ZabbixApiClient from './zabbix-api/zabbix-api-client'

const zabbixApi = new ZabbixApiClient(configs.zabbixApiUrl)

export { zabbixApi }
