import { Metric } from '@collector/types/domain/metric'
import { ZabbixSenderItem } from 'src/shared/types/zabbix-sender/zabbix-item'

export class MetricMapper {
  static toZabbixItens(metric: Metric): ZabbixSenderItem[] {
    const zabbixItens: ZabbixSenderItem[] = []

    Object.entries(metric).forEach(([_key, _value]) => {
      const key = _key as keyof Metric
      const value: Metric[keyof Metric] = _value
      if (key === 'hostname') return
      zabbixItens.push({ key, value })
    })

    return zabbixItens
  }
}
