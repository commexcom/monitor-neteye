import express from 'express'
import 'express-async-errors'
import 'dotenv/config'
import cors from 'cors'

import { routes } from './routes'
import errorParserMiddleware from './middleware/error-parser'
import logger from '@util/logger'
import configs from './configs'

const app = express()

app.use(express.json())

app.use(cors())

app.use(routes)

app.use(errorParserMiddleware)

app.listen(configs.serverPort, () =>
  logger.info(`Server is running in port ${configs.serverPort}`)
)
