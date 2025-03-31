import {
  HistoricValue,
  UnitOverview,
} from '@modules/interface/types/unit/overview'
import ZabbixItensParser from '@util/zabbix-itens-parser'
import {
  ZabbixHost,
  ZabbixItem,
} from 'src/shared/types/zabbix-api/zabbix-response'

/**
 * @description Maps Zabbix data to UnitOverview
 * @param zabbixData - Zabbix data to be mapped
 * @returns UnitOverview
 */

class UnitOverviewMapper extends ZabbixItensParser {
  private host: ZabbixHost
  private lanId: number

  constructor(lanId: number, host: ZabbixHost, itens: ZabbixItem[]) {
    super(itens)
    this.lanId = lanId
    this.host = host
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
    return this.getItemAsString('dnsAddreses') //todo
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
    return [{} as HistoricValue] //todo
  }

  private getDownload(): HistoricValue[] {
    return [{} as HistoricValue] //todo
  }

  private getDisponibility(): number {
    return this.getItemAsNumber('disponibility') //todo
  }

  public toUnitOverview(): UnitOverview {
    return {
      name: this.getName(),
      lanId: this.getLanId(),
      download: this.getDownload(),
      upload: this.getUpload(),
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
