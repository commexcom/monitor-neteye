import { GetSomethingResponse } from '@modules/v1/types/some-api/get-something/get-something-response'
import { ISomeApiClient } from './i-some-api-client'
import { PostSomethingRequest } from '@modules/v1/types/some-api/post-something/post-something-request'
import { PostSomethingResponse } from '@modules/v1/types/some-api/post-something/post-something-response'
import { someApi } from 'src/shared/clients/some-api'
import { INVALID_RESPONSE_SOME_API } from '@modules/v1/errors'

export class SomeApiClient implements ISomeApiClient {
  async getSomething(): Promise<GetSomethingResponse> {
    try {
      const peopleResponse = await someApi.get<GetSomethingResponse>(
        `/some-endpoint`
      )

      if (peopleResponse.status !== 200) throw INVALID_RESPONSE_SOME_API

      return peopleResponse.data
    } catch (error) {
      throw INVALID_RESPONSE_SOME_API
    }
  }

  async postSomething(
    data: PostSomethingRequest
  ): Promise<PostSomethingResponse> {
    try {
      const response = await someApi.post<PostSomethingResponse>(
        `/some-endpoint`,
        data
      )

      if (response.status !== 200) throw INVALID_RESPONSE_SOME_API

      return response.data
    } catch (error) {
      throw INVALID_RESPONSE_SOME_API
    }
  }
}
