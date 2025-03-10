import { SomeApiClient } from '@modules/v1/clients/some-api/some-api-client'
import { SomethingMapper } from '@modules/v1/mappers/somethingMapper'

interface GetSomethingServiceProps {
  someApiClient: SomeApiClient
}

export class GetSomethingService {
  private someApiClient: SomeApiClient

  constructor(props: GetSomethingServiceProps) {
    this.someApiClient = props.someApiClient
  }

  async execute() {
    const data = await this.someApiClient.getSomething()

    return SomethingMapper.toDomain(data)
  }
}
