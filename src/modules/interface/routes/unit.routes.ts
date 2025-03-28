import { Router } from 'express'
import { zabbixApi } from 'src/shared/clients/zabbix/zabbix-api'
import { UnitController } from '@interface/controllers/unit-controller'

const unitController = new UnitController({
  zabbixApiClient: zabbixApi,
})

const unitRouter = Router()

unitRouter.get('/overview', unitController.getOverview.bind(unitController))

unitRouter.get('/interfaces', unitController.getOverview.bind(unitController))

unitRouter.get('/performance', unitController.getOverview.bind(unitController))

unitRouter.get('/scripts', unitController.getOverview.bind(unitController))

export { unitRouter }
