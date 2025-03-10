import { SomeApiClient } from '@modules/v1/clients/some-api/some-api-client'

interface DoSomethingServiceProps {
  someApiClient: SomeApiClient
}

export class DoSomethingService {
  private someApiClient: SomeApiClient

  constructor(props: DoSomethingServiceProps) {
    this.someApiClient = props.someApiClient
  }

  async execute(name: string, document: string): Promise<void> {
    await this.someApiClient.postSomething({ name, document })
  }
}
