import {
  INVALID_DOCUMENT_PARAMETER,
  MISSING_DOCUMENT_PARAMETER,
  MISSING_NAME_PARAMETER,
} from '../errors/index'

import { z } from 'zod'

const regexCPF = process.env.REGEX_CPF ? process.env.REGEX_CPF : ''

export const someDataSchema = z.object({
  name: z.string({
    required_error: `${MISSING_NAME_PARAMETER.errorCode} |~| ${MISSING_NAME_PARAMETER.message}`,
  }),
  document: z
    .string({
      required_error: `${MISSING_DOCUMENT_PARAMETER.errorCode} |~| ${MISSING_DOCUMENT_PARAMETER.message}`,
    })
    .regex(new RegExp(regexCPF), {
      message: `${INVALID_DOCUMENT_PARAMETER.errorCode} |~| ${INVALID_DOCUMENT_PARAMETER.message}`,
    }),
})
