export interface UnitOverview {
  disponibility: number
  latency: number
  packetLoss: number
  uptime: string
  dnsStatus: boolean
  linkQuantity: number
  unit: number
  unitName: string
  address: string
  dnsAddreses: string
  secretariat: string
  routerModel: string
  routerIp: string
  upload: {
    time: Date
    value: number
  }[]
  download: {
    time: Date
    value: number
  }[]
}
