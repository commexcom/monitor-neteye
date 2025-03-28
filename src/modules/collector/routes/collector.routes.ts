import { Router } from 'express'
import { CollectorController } from '@collector/controllers/collector-controller'
import configs from '@config/index'
import zabbixAuthMiddleware from 'src/shared/middleware/zabbix-auth'
import { ZabbixSenderClient } from '@clients/zabbix/zabbix-sender/zabbix-sender-client'

const zabbixSenderClient = new ZabbixSenderClient(configs.zabbixServer)

const collectorController = new CollectorController({
  zabbixSenderClient: zabbixSenderClient,
})

const collectorRouter = Router()

collectorRouter.use(zabbixAuthMiddleware)

collectorRouter.post(
  '/collector/metric',
  collectorController.postMetric.bind(collectorController)
)

export { collectorRouter }
