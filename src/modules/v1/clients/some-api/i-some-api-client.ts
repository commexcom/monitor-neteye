import { PostSomethingResponse } from '@modules/v1/types/some-api/postSomething/post-something-response'
import { PostSomethingRequest } from '../../types/some-api/postSomething/post-something-request'
import { GetSomethingResponse } from '@modules/v1/types/some-api/getSomething/get-something-response'

export abstract class ISomeApiClient {
  abstract getSomething(): Promise<GetSomethingResponse>

  abstract postSomething(
    data: PostSomethingRequest
  ): Promise<PostSomethingResponse>
}
