import {
  HistoricValue,
  UnitOverview,
} from '@modules/interface/types/unit/overview'
import { zabbixItemHistoryToHourly } from '@util/index'
import logger from '@util/logger'
import ZabbixItensParser from '@util/zabbix-itens-parser'
import { on } from 'events'
import {
  ZabbixHost,
  ZabbixItem,
  ZabbixItemHistory,
} from 'src/shared/types/zabbix-api/zabbix-response'

/**
 * @description Maps Zabbix data to UnitOverview
 * @param zabbixData - Zabbix data to be mapped
 * @returns UnitOverview
 */

class UnitOverviewMapper extends ZabbixItensParser {
  private host: ZabbixHost
  private lanId: number
  private upload: HistoricValue[]
  private download: HistoricValue[]
  private disponibility: number

  constructor(lanId: number, host: ZabbixHost, itens: ZabbixItem[]) {
    super(itens)
    this.lanId = lanId
    this.host = host
    this.upload = [{} as HistoricValue]
    this.download = [{} as HistoricValue]
  }

  private getName(): string {
    return this.getItemAsString('descricao')
  }

  private getLanId(): number {
    return this.lanId
  }

  private getUptime(): string {
    return this.getItemAsString('uptime')
  }

  private getLatency(): number {
    return this.getItemAsNumber('latency')
  }

  private getPacketLoss(): number {
    return this.getItemAsNumber('packetLoss')
  }

  private getLinkQuantity(): number {
    const uplinks: Number[] = []

    for (let i = 1; i < 5; i++) {
      const element = this.getItemAsBoolean(`interface.isuplink.${i}`)
      if (element) uplinks.push(Number(element))
    }

    return uplinks.length
  }

  private getAdress(): string {
    return this.getItemAsString('address')
  }

  private getDnsStatus(): boolean {
    return this.getItemAsBoolean('dns')
  }

  private getDnsAddreses(): string {
    return this.getItemAsString('dnsAddreses')
  }

  private getSecretariat(): string {
    return this.getItemAsString('secretariat')
  }

  private getModel(): string {
    return this.getItemAsString('model')
  }

  private getIpAddress(): string {
    return this.host.interfaces[0].ip
  }

  private getUpload(): HistoricValue[] {
    return this.upload
  }

  private getDownload(): HistoricValue[] {
    return this.download
  }

  private getDisponibility(): number {
    return this.disponibility
  }

  setDisponibility(pingHistory: ZabbixItemHistory[]): void {
    let onlineChecks = 0

    pingHistory.forEach((element) => {
      if (element.value === '1') onlineChecks++
    })
    const disponibility = (onlineChecks / pingHistory.length) * 100
    this.disponibility = parseFloat(disponibility.toFixed(2))
  }

  setUpload(upload: ZabbixItemHistory[]): void {
    const historyHourly = zabbixItemHistoryToHourly(upload)

    const mappedHistoryHourly = historyHourly.map((item) => ({
      time: new Date(parseInt(item.clock) * 1000),
      value: Number(item.value),
    }))

    this.upload = mappedHistoryHourly.slice(0, 24)
  }

  setDownload(download: ZabbixItemHistory[]): void {
    const historyHourly = zabbixItemHistoryToHourly(download)

    const mappedHistoryHourly = historyHourly.map((item) => ({
      time: new Date(parseInt(item.clock) * 1000),
      value: Number(item.value),
    }))

    this.download = mappedHistoryHourly.slice(0, 24)
  }

  public toUnitOverview(): UnitOverview {
    return {
      name: this.getName(),
      lanId: this.getLanId(),
      address: this.getAdress(),
      model: this.getModel(),
      ipAddress: this.getIpAddress(),
      secretariat: this.getSecretariat(),
      disponibility: this.getDisponibility(),
      latency: this.getLatency(),
      packetLoss: this.getPacketLoss(),
      linkQuantity: this.getLinkQuantity(),
      dnsAddreses: this.getDnsAddreses(),
      uptime: this.getUptime(),
      dnsStatus: this.getDnsStatus(),
      download: this.getDownload(),
      upload: this.getUpload(),
    }
  }

  static toPage(
    lanId: number,
    host: ZabbixHost,
    zabbixData: ZabbixItem[]
  ): UnitOverview {
    const mapper = new UnitOverviewMapper(lanId, host, zabbixData)
    return mapper.toUnitOverview()
  }
}

export default UnitOverviewMapper
