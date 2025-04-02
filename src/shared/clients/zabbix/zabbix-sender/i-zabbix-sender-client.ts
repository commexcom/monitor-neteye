import { ZabbixSenderItem } from 'src/shared/types/zabbix-sender/zabbix-item'

export abstract class IZabbixSenderClient {
  abstract sendItems(
    hostname: string,
    zabbixItens: ZabbixSenderItem[]
  ): Promise<void>
}
