import 'dotenv/config'

const configs = {
  serverPort: process.env.SERVER_PORT || 3000,
  zabbixApiUrl: process.env.ZABBIX_API_URL || '',
  zabbixApiUsername: process.env.ZABBIX_API_USERNAME || '',
  zabbixApiPassword: process.env.ZABBIX_API_PASSWORD || '',
  zabbixServer: process.env.ZABBIX_SERVER || '',
  zabbixServerPort: process.env.ZABBIX_SERVER_PORT || '',
}

export default configs
