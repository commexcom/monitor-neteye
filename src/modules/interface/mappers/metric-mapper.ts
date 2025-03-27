import { Metric } from '../types/domain/metric'
import { ZabbixItem } from '../types/domain/zabbix-item'

export class MetricMapper {
  static toZabbixItens(metric: Metric): ZabbixItem[] {
    const zabbixItens: ZabbixItem[] = []

    Object.entries(metric).forEach(([_key, _value]) => {
      const key = _key as keyof Metric
      const value: Metric[keyof Metric] = _value
      if (key === 'hostname') return
      zabbixItens.push({ key, value })
    })

    return zabbixItens
  }
}
