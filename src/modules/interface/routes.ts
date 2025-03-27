import { Router } from 'express'
import { unitRouter } from './routes/unit.routes'

const interfaceRoutes = Router()

interfaceRoutes.use('/unit', unitRouter)

export { interfaceRoutes }
