import { Router } from 'express'
import { collectorRouter } from './routes/collector.routes'

const collectorRoutes = Router()

collectorRoutes.use('/collector', collectorRouter)

export { collectorRoutes }
