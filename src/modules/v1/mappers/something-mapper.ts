import { Something, SomeTypes } from '../types/domain/something'
import { GetSomethingResponse } from '../types/some-api/get-something/get-something-response'

export class SomethingMapper {
  static toDomain(getSomethingResponse: GetSomethingResponse): Something {
    let type: SomeTypes
    switch (getSomethingResponse.type) {
      case 1:
        type = SomeTypes.TYPE_ONE
        break
      case 2:
        type = SomeTypes.TYPE_TWO
        break
      case 3:
        type = SomeTypes.TYPE_THREE
        break
      default:
        type = SomeTypes.TYPE_ONE
    }

    return {
      name: getSomethingResponse.name,
      age: getSomethingResponse.age,
      type: type,
    }
  }
}
