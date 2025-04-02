import { ZabbixSenderClient } from '@clients/zabbix/zabbix-sender/zabbix-sender-client'
import { Response, Request } from 'express'
import { Metric } from '@collector/types/domain/metric'
import { postMetricSchema } from '@collector/data-schemas/post-metric-schema'
import { SendMetricService } from '@collector//services/send-metric/send-metric-service'

interface CollectorControllerProps {
  zabbixSenderClient: ZabbixSenderClient
}

export class CollectorController {
  private zabbixSenderClient: ZabbixSenderClient

  constructor(props: CollectorControllerProps) {
    this.zabbixSenderClient = props.zabbixSenderClient
  }

  async postMetric(request: Request, response: Response) {
    const metric: Metric = postMetricSchema.parse(request.body)

    const sendMetricService = new SendMetricService({
      zabbixSenderClient: this.zabbixSenderClient,
    })

    await sendMetricService.execute(metric)

    return response.status(200).json()
  }
}
