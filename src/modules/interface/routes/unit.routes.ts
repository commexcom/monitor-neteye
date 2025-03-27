import { Router } from 'express'
import configs from '@config/index'
import zabbixAuthMiddleware from 'src/shared/middleware/zabbix-auth'
import { ZabbixApiClient } from '../clients/zabbix-api/zabbix-api-client'
import { UnitController } from '../controllers/unit-controller'

const zabbixApiClient = new ZabbixApiClient(configs.zabbixApiUrl)

const unitController = new UnitController({
  zabbixApiClient: zabbixApiClient,
})

const unitRouter = Router()

unitRouter.use(zabbixAuthMiddleware)

unitRouter.get('/overview', unitController.getOverview.bind(unitController))

unitRouter.get('/interfaces', unitController.getOverview.bind(unitController))

unitRouter.get('/performance', unitController.getOverview.bind(unitController))

unitRouter.get('/scripts', unitController.getOverview.bind(unitController))

export { unitRouter }
