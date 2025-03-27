import { ZabbixSenderClient } from '@modules/collector/clients/zabbix/zabbix-sender/zabbix-sender-client'
import { MetricMapper } from '@modules/collector/mappers/metric-mapper'
import { Metric } from '@modules/collector/types/domain/metric'

interface SendMetricServiceProps {
  zabbixSenderClient: ZabbixSenderClient
}

export class SendMetricService {
  private zabbixSenderClient: ZabbixSenderClient

  constructor(props: SendMetricServiceProps) {
    this.zabbixSenderClient = props.zabbixSenderClient
  }

  async execute(metric: Metric): Promise<void> {
    const zabbixItens = MetricMapper.toZabbixItens(metric)
    await this.zabbixSenderClient.sendItems(metric.hostname, zabbixItens)
  }
}
