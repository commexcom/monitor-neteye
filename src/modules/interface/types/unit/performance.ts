export interface UnitPerformance {
  lastTest: PerformanceTest
  tests: PerformanceTest[]
}

export interface PerformanceTest {
  time: Date
  ping: number
  packetLoss: number
  dns: boolean
  bandWidht: number
  upload: number
  download: number
}
