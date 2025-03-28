import { PARSE_ZABBIX_ITEM_ERROR } from '@shared-errors/index'
import { ZabbixItem } from '../types/zabbix-api/zabbix-response'

class ZabbixItensParser {
  private itens: ZabbixItem[]

  constructor(itens: ZabbixItem[]) {
    this.itens = itens
  }

  // Métodos para parsear tipos específicos
  private parseBoolean(value: string): boolean {
    return value === '1'
  }

  private parseNumber(value: string): number {
    return parseFloat(value)
  }

  private parseDate(timestamp: string): Date {
    return new Date(parseInt(timestamp) * 1000)
  }

  getItemDate(key: string): Date {
    const item = this.itens.find((i) => i.key_ === key)
    if (!item) throw PARSE_ZABBIX_ITEM_ERROR
    return this.parseDate(item.lastclock)
  }

  getItemName(key: string): string {
    const item = this.itens.find((i) => i.key_ === key)
    if (!item) throw PARSE_ZABBIX_ITEM_ERROR
    return item.name
  }

  getItemAsBoolean(key: string): boolean {
    const item = this.itens.find((i) => i.key_ === key)
    if (!item) throw PARSE_ZABBIX_ITEM_ERROR
    return this.parseBoolean(item.lastvalue)
  }

  getItemAsString(key: string): string {
    const item = this.itens.find((i) => i.key_ === key)
    if (!item) throw PARSE_ZABBIX_ITEM_ERROR
    return item.lastvalue
  }

  getItemAsNumber(key: string): number {
    const item = this.itens.find((i) => i.key_ === key)
    if (!item) throw PARSE_ZABBIX_ITEM_ERROR
    return this.parseNumber(item.lastvalue)
  }

  getItem(key: string): boolean | number | string {
    const item = this.itens.find((i) => i.key_ === key)

    if (!item) throw PARSE_ZABBIX_ITEM_ERROR

    switch (item.value_type) {
      case '0':
        return this.parseNumber(item.lastvalue)
      case '3':
        return this.parseNumber(item.lastvalue)
      default:
        return item.lastvalue
    }
  }
}

export default ZabbixItensParser
