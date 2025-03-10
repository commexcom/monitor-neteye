import { Router } from 'express'

const v1Routes = Router()

v1Routes.use('/v1', v1Routes)

export { v1Routes }
