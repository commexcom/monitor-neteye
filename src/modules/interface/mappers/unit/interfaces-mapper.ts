import {
  Interface,
  UnitInterfaces,
} from '@modules/interface/types/unit/interfaces'
import ZabbixItensParser from '@util/zabbix-itens-parser'
import { ZabbixItem } from 'src/shared/types/zabbix-api/zabbix-response'

class UnitInterfacesMapper extends ZabbixItensParser {
  constructor(itens: ZabbixItem[]) {
    super(itens)
  }

  private getInterfaceStatus(index: number): boolean {
    return this.getItemAsBoolean(`interface.status.${index}`)
  }

  private getInterfaceName(index: number): string {
    return `${this.getInterfaceType(index)}${index}`
  }

  private getInterfaceComment(index: number): string {
    return this.getItemAsString(`interface.comment.${index}`)
  }

  private getInterfaceMac(index: number): string {
    return this.getItemAsString(`interface.mac.${index}`)
  }

  private getInterfaceType(index: number): string {
    return this.getItemAsString(`interface.type.${index}`)
  }

  private getInterfaceUplink(index: number): boolean {
    return this.getItemAsBoolean(`interface.isuplink.${index}`)
  }

  private getInterfaceDownload(index: number): number {
    return this.getItemAsNumber(`interface.rx.${index}`)
  }

  private getInterfaceUpload(index: number): number {
    return this.getItemAsNumber(`interface.tx.${index}`)
  }

  private getInterfaces(): Interface[] {
    const interfaces: Interface[] = []

    for (let i = 1; i < 5; i++) {
      const element: Interface = {
        status: this.getInterfaceStatus(i),
        name: this.getInterfaceName(i),
        comment: this.getInterfaceComment(i),
        mac: this.getInterfaceMac(i),
        type: this.getInterfaceType(i),
        isUplink: this.getInterfaceUplink(i),
        download: this.getInterfaceDownload(i),
        upload: this.getInterfaceUpload(i),
      }

      interfaces.push(element)
    }
    return interfaces
  }

  public toUnitInterfaces(): UnitInterfaces {
    return {
      interfaces: this.getInterfaces(),
    }
  }

  static toPage(zabbixData: ZabbixItem[]): UnitInterfaces {
    const mapper = new UnitInterfacesMapper(zabbixData)
    return mapper.toUnitInterfaces()
  }
}

export default UnitInterfacesMapper
