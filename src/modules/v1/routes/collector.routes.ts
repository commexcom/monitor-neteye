import { Router } from 'express'
import { ZabbixSenderClient } from '../clients/zabbix/zabbix-sender/zabbix-sender-client'
import { CollectorController } from '../controllers/collector-controller'
import configs from '@config/index'
import zabbixAuthMiddleware from 'src/shared/middleware/zabbix-auth'

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
