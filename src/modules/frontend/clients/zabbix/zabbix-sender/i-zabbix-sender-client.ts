import { ZabbixItem } from '@modules/collector/types/domain/zabbix-item'

export abstract class IZabbixSenderClient {
  abstract sendItems(hostname: string, zabbixItens: ZabbixItem[]): Promise<void>
}
