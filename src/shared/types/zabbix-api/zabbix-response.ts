export interface ZabbixResponse<T> {
  jsonrpc: string
  result?: T
  error?: ZabbixError
  id: number
}

export interface ZabbixError {
  code: number
  message: string
  data: string
}

export interface ZabbixItem {
  itemid: string
  name: string
  key_: string
  lastvalue: string
  lastclock: string
  hostid: string
  units?: string
  value_type: string
}

export interface ZabbixItemHistory {
  itemid: string
  clock: string
  value: string
  ns?: string
}

export interface ZabbixHost {
  hostid: string
  host: string
  name: string
  status: string
  available: string
  description: string
  proxy_hostid: string
  inventory: {
    os: string
    location: string
  }
  tags: [
    {
      tag: string
      value: string
    }
  ]
  interfaces: [
    {
      interfaceid: string
      ip: string
      dns: string
      port: string
      type: string
    }
  ]
}
