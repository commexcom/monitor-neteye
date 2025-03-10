import { Router } from 'express'
import { v1Routes } from '@modules/v1/routes'
import { healthcheckRoutes } from '@modules/healthcheck/routes'

const routes = Router()

routes.use('/', healthcheckRoutes)
routes.use('/v1', v1Routes)

export { routes }
