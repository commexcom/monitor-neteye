import { Router } from 'express'
import { SomeApiClient } from '../clients/some-api/some-api-client'
import { SomeController } from '../controllers/some-controller'

const someApiClient = new SomeApiClient()

const someController = new SomeController({
  someApiClient: someApiClient,
})

const someRouter = Router()

someRouter.get(
  '/get/some-route',
  someController.getSomething.bind(someController)
)

export { someRouter }
