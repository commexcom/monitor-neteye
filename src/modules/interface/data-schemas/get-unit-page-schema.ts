import { INVALID_PARAMETER, MISSING_PARAMETER } from '../errors/index'

import { z } from 'zod'

export const getUnitPageSchema = z.object({
  lanId: z.number({
    required_error: `${MISSING_PARAMETER('lanId').message}`,
    invalid_type_error: `${INVALID_PARAMETER('lanId').message}`,
  }),
})
