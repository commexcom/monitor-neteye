export interface UnitOverview {
  name: string
  lanId: number
  disponibility: number
  latency: number
  packetLoss: number
  uptime: string
  linkQuantity: number
  address: string
  dnsStatus: boolean
  dnsAddreses: string
  secretariat: string
  model: string
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
