import { INVALID_PARAMETER, MISSING_PARAMETER } from '../errors/index'

import { z } from 'zod'

export const postMetricSchema = z.object({
  hostname: z.string({
    required_error: `${MISSING_PARAMETER('hostname').message}`,
    invalid_type_error: `${INVALID_PARAMETER('hostname').message}`,
  }),
  latency: z.number({
    required_error: `${MISSING_PARAMETER('latency').message}`,
    invalid_type_error: `${INVALID_PARAMETER('latency').message}`,
  }),
  packetLoss: z.number({
    required_error: `${MISSING_PARAMETER('packetLoss').message}`,
    invalid_type_error: `${INVALID_PARAMETER('packetLoss').message}`,
  }),
  uploadPerSecond: z.number({
    required_error: `${MISSING_PARAMETER('uploadPerSecond').message}`,
    invalid_type_error: `${INVALID_PARAMETER('uploadPerSecond').message}`,
  }),
  downloadPerSecond: z.number({
    required_error: `${MISSING_PARAMETER('downloadPerSecond').message}`,
    invalid_type_error: `${INVALID_PARAMETER('downloadPerSecond').message}`,
  }),
})
