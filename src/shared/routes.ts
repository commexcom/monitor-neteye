import { Router } from 'express'
import { healthcheckRoutes } from '@modules/healthcheck/routes'
import { collectorRoutes } from '@modules/collector/routes'

const routes = Router()

routes.use('/', healthcheckRoutes)
routes.use('/collector', collectorRoutes)

export { routes }
