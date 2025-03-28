import { ZabbixHost } from 'src/shared/types/zabbix-api/zabbix-response'
import { UNIT_HOST_NOT_FOUND } from '../errors/unit-errors'

export function findHostByLanid(
  lanId: string,
  hosts: ZabbixHost[]
): ZabbixHost {
  const foundHost = hosts.find((host) => {
    if (host.host === `lan_${lanId}`) return host
    return null
  })

  if (!foundHost) throw UNIT_HOST_NOT_FOUND

  return foundHost
}
