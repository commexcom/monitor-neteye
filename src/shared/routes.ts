import { Router } from 'express'
import { healthcheckRoutes } from '@modules/healthcheck/routes'
import { collectorRoutes } from '@modules/collector/routes'
import { interfaceRoutes } from '@modules/interface/routes'

const routes = Router()

routes.use('/', healthcheckRoutes)
routes.use('/collector', collectorRoutes)
routes.use('/interface', interfaceRoutes)

export { routes }
