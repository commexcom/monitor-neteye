import { AppError } from '@shared-errors/app-error'
import {
  ZABBIX_SENDER_CONFIG_ERROR,
  ZABBIX_SENDER_SENDDATA_ERROR,
} from '@modules/collector/errors/zabbix-server'
import ZabbixSender, { ZabbixSenderResponse } from 'node-zabbix-sender'
import { IZabbixSenderClient } from './i-zabbix-sender-client'
import { ZabbixItem } from '@modules/collector/types/domain/zabbix-item'
import logger from '@util/logger'
import { SendAllResponse } from '@modules/collector/types/dto/zabbix-sender/send-all-response'

export class ZabbixSenderClient implements IZabbixSenderClient {
  private sender: ZabbixSender

  constructor(zabbixServer: string, zabbixPort?: number) {
    if (!zabbixServer || !zabbixPort) {
      throw ZABBIX_SENDER_CONFIG_ERROR
    }

    this.sender = new ZabbixSender({ host: zabbixServer, port: zabbixPort })
  }

  async sendItems(hostname: string, zabbixItens: ZabbixItem[]): Promise<void> {
    await this.clearItems()
    zabbixItens.forEach(async (zabbixItem) => {
      await this.addData(hostname, zabbixItem).catch(() => {
        logger.error(
          `${hostname} - Error trying to addItem > ${zabbixItem.key}`
        )
      })
    })

    const sentData = await this.sendAll()

    if (sentData.failed > 0) {
      logger.warn(`${hostname} - Data sent with ${sentData.failed} failed`)
      return
    }

    logger.info(`${hostname} - Data sent successfully`)
  }

  private async addData(host: string, zabbixItem: ZabbixItem): Promise<void> {
    if (
      !host ||
      !zabbixItem.key ||
      zabbixItem.value === undefined ||
      zabbixItem.value === null
    ) {
      throw ZABBIX_SENDER_CONFIG_ERROR
    }

    try {
      await this.sender.addItem(host, zabbixItem.key, zabbixItem.value)
    } catch (error) {
      throw new AppError(
        `Failed to add HOST:${host} data to Zabbix Server`,
        500,
        'ZABBIX_ADD_DATA_ERROR'
      )
    }
  }

  private async sendAll(): Promise<SendAllResponse> {
    const sendPromise = () =>
      new Promise<ZabbixSenderResponse>((resolve, reject) => {
        this.sender.send((err, res) => {
          if (err) {
            reject(ZABBIX_SENDER_SENDDATA_ERROR)
          } else {
            resolve(res)
          }
        })
      })

    try {
      const sentData = await sendPromise()

      if (!sentData || sentData.response != 'success') {
        throw ZABBIX_SENDER_SENDDATA_ERROR
      }

      return this.parseZabbixResponse(sentData.info)
    } catch (error) {
      throw ZABBIX_SENDER_SENDDATA_ERROR
    }
  }

  private async clearItems(): Promise<void> {
    try {
      await this.sender.clearItems()
    } catch (error) {
      throw new AppError(
        `Failed to clear items `,
        500,
        'ZABBIX_CLEAR_DATA_ERROR'
      )
    }
  }

  private parseZabbixResponse(response: string): SendAllResponse {
    const result: SendAllResponse = {
      processed: 0,
      failed: 0,
      total: 0,
    }
    const parts = response.split(';')

    parts.forEach((part) => {
      const [key, value] = part.split(':').map((item) => item.trim())
      if (key && value !== undefined) {
        result[key as keyof typeof result] = parseFloat(value)
      }
    })

    return result
  }
}
