import { ZabbixSenderClient } from '@modules/v1/clients/zabbix/zabbix-sender/zabbix-sender-client'
import { MetricMapper } from '@modules/v1/mappers/metric-mapper'
import { Metric } from '@modules/v1/types/domain/metric'

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
