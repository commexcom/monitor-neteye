import { Response, Request } from 'express'

import { SomeApiClient } from '../clients/some-api/some-api-client'
import { GetSomethingService } from '../services/get-someting/get-someting-service'
import { DoSomethingService } from '../services/do-something/do-something-service'
import { someDataSchema } from '../data-schemas/some-data-schema'

interface SomeControllerProps {
  someApiClient: SomeApiClient
}

export class SomeController {
  private someApiClient: SomeApiClient

  constructor(props: SomeControllerProps) {
    this.someApiClient = props.someApiClient
  }

  async getSomething(request: Request, response: Response) {
    const getSomethingService = new GetSomethingService({
      someApiClient: this.someApiClient,
    })

    const something = await getSomethingService.execute()

    return response.status(200).json(something)
  }

  async postSomething(request: Request, response: Response) {
    const doSomethingService = new DoSomethingService({
      someApiClient: this.someApiClient,
    })

    const { name, document } = someDataSchema.parse(request.body)

    await doSomethingService.execute(name, document)

    return response.status(200).json()
  }
}
