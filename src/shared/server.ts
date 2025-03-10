import express from 'express'
import 'express-async-errors'
import 'dotenv/config'
import cors from 'cors'

import { routes } from './routes'
import errorParserMiddleware from './middleware/error-parser'
import logger from '@util/logger'

const app = express()

app.use(express.json())

app.use(cors())

app.use(routes)

app.use(errorParserMiddleware)

app.listen(process.env.SERVER_PORT || 3000, () =>
  logger.info(`Server is running in port ${process.env.SERVER_PORT}`)
)
