import { SendZabbixItemService } from './send-zabbix-item-service'
import { ZabbixSenderClient } from '@modules/v1/clients/zabbix-sender/zabbix-sender-client'
import logger from '@util/logger'

jest.mock('@modules/v1/clients/zabbix-sender/zabbix-sender-client')
jest.mock('@util/logger')

describe('SendZabbixItemService', () => {
  let zabbixSenderClient: ZabbixSenderClient
  let sendZabbixItemService: SendZabbixItemService

  beforeAll(() => {
    zabbixSenderClient = new ZabbixSenderClient()
    sendZabbixItemService = new SendZabbixItemService({ zabbixSenderClient })
  })

  it('should log success message when data is sent successfully', async () => {
    zabbixSenderClient.sendAll = jest.fn().mockResolvedValue({ failed: 0 })
    const hostname = 'test-host'

    await sendZabbixItemService.execute(hostname)

    expect(logger.info).toHaveBeenCalledWith(
      `${hostname} - Data sent successfully`
    )
  })

  it('should log failure message when data sending fails', async () => {
    zabbixSenderClient.sendAll = jest.fn().mockResolvedValue({ failed: 1 })
    const hostname = 'test-host'

    await sendZabbixItemService.execute(hostname)

    expect(logger.info).toHaveBeenCalledWith(
      `${hostname} - Data sent with 1 failed`
    )
  })
})
