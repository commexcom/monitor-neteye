import Host from '@modules/v1/types/dto/zabbix-api/host'

export abstract class IZabbixApiClient {
  abstract authorize(username: string, password: string): Promise<void>

  abstract getHosts(groupId?: string): Promise<Host[]>
}
