import { ZabbixItem } from '@modules/v1/types/domain/zabbix-item'

export abstract class IZabbixSenderClient {
  abstract sendItems(hostname: string, zabbixItens: ZabbixItem[]): Promise<void>
}
