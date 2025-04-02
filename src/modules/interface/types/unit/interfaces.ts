export interface UnitInterfaces {
  interfaces: Interface[]
}

export interface Interface {
  name: string
  comment?: string
  type: string
  isUplink: boolean
  mac: string
  download: number
  upload: number
  status: boolean
}
