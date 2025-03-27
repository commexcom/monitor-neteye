interface UnitInterfaces {
  interfaces: {
    type: string
    name: string
    mac: string
    comment?: string
    interfaceType: string
    upload: number
    download: number
    status: boolean
  }[]
  activeInterfaces: number
  totalTraffic: number
  maxDownload: number
  maxUpload: number
}
