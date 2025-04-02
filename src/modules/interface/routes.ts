import { Router } from 'express'
import { unitRouter } from './routes/unit.routes'
import zabbixAuthMiddleware from 'src/shared/middleware/zabbix-auth'

const interfaceRoutes = Router()

interfaceRoutes.use(zabbixAuthMiddleware)

interfaceRoutes.use('/unit', unitRouter)

export { interfaceRoutes }
