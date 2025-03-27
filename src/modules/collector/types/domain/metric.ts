export interface Metric {
  hostname: string
  latency: number
  packetLoss: number
  uploadPerSecond: number
  downloadPerSecond: number
}
