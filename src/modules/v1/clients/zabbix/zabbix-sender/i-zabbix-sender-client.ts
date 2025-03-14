import { ZabbixItem } from '@modules/v1/types/domain/zabbix-item'
import { SendInfo } from './zabbix-sender-client'

export abstract class IZabbixSenderClient {
  abstract addData(host: string, zabbixItem: ZabbixItem): Promise<void>

  abstract sendAll(): Promise<SendInfo>
  abstract clearItems(): Promise<void>
}
