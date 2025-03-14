import { ZabbixSenderClient } from '@modules/v1/clients/zabbix/zabbix-sender/zabbix-sender-client'
import { ZabbixItem } from '@modules/v1/types/domain/zabbix-item'
import logger from '@util/logger'

interface SendZabbixItemServiceProps {
  zabbixSenderClient: ZabbixSenderClient
}

export class SendZabbixItemService {
  private zabbixSenderClient: ZabbixSenderClient

  constructor(props: SendZabbixItemServiceProps) {
    this.zabbixSenderClient = props.zabbixSenderClient
  }

  async execute(hostname: string, zabbixItens: ZabbixItem[]): Promise<void> {
    await this.zabbixSenderClient.clearItems()

    zabbixItens.forEach(async (zabbixItem) => {
      await this.zabbixSenderClient.addData(hostname, zabbixItem).catch(() => {
        logger.error(
          `${hostname} - Error trying to addItem > ${zabbixItem.key}`
        )
      })
    })

    const sentData = await this.zabbixSenderClient.sendAll()

    if (sentData.failed > 0) {
      logger.info(`${hostname} - Data sent with ${sentData.failed} failed`)
      return
    }

    logger.info(`${hostname} - Data sent successfully`)
  }
}
