import {
  ZabbixHost,
  ZabbixItem,
  ZabbixItemHistory,
} from 'src/shared/types/zabbix-api/zabbix-response'

export abstract class IZabbixApiClient {
  abstract authorize(username: string, password: string): Promise<void>

  abstract getHosts(groupId?: string): Promise<ZabbixHost[]>

  abstract getHostItems(hostId: string): Promise<ZabbixItem[]>

  abstract getItemHistory(
    itemId: string,
    limit: number
  ): Promise<ZabbixItemHistory[]>
}
