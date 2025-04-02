export interface UnitOverview {
  name: string
  lanId: number
  disponibility: number
  latency: number
  packetLoss: number
  uptime: number
  linkQuantity: number
  address: string
  dnsStatus: boolean
  dnsAddreses: string
  secretariat: string
  model: string
  version: string
  ipAddress: string
  upload: {
    time: Date
    value: number
  }[]
  download: HistoricValue[]
}

export interface HistoricValue {
  time: Date
  value: number
}
