import {
  ZABBIX_API_AUTHORIZATION_ERROR,
  ZABBIX_API_CONFIG_ERROR,
  ZABBIX_API_FETCHINGHOSTS_ERROR,
  ZABBIX_API_INVALID_PARAMETERS,
  ZABBIX_API_MISSING_AUTHENTICATION,
} from 'src/shared/errors/zabbix-api'
import axios, { AxiosInstance } from 'axios'
import { IZabbixApiClient } from './i-zabbix-api-client'
import {
  ZabbixHost,
  ZabbixItem,
  ZabbixItemHistory,
  ZabbixResponse,
} from 'src/shared/types/zabbix-api/zabbix-response'
import {
  ZABBIX_API_FETCHING_HISTORY_ERROR,
  ZABBIX_API_FETCHINGITEMS_ERROR,
} from 'src/shared/errors/zabbix-api'
import logger from '@util/logger'

class ZabbixApiClient implements IZabbixApiClient {
  private client: AxiosInstance
  private authKey: string | null

  constructor(zabbixApiUrl: string) {
    if (!zabbixApiUrl) {
      throw ZABBIX_API_CONFIG_ERROR
    }

    this.authKey = null
    this.client = axios.create({
      baseURL: zabbixApiUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  async authorize(username: string, password: string): Promise<void> {
    if (!username || !password) throw ZABBIX_API_INVALID_PARAMETERS
    try {
      const auth = await this.client.post<ZabbixResponse<string>>('', {
        jsonrpc: '2.0',
        method: 'user.login',
        params: {
          user: username,
          password: password,
        },
        id: 1,
        auth: null,
      })

      if (auth.status !== 200 || !auth.data.result)
        throw ZABBIX_API_AUTHORIZATION_ERROR

      this.authKey = auth.data.result
    } catch (error) {
      throw ZABBIX_API_AUTHORIZATION_ERROR
    }
  }

  async getHosts(groupId?: string): Promise<ZabbixHost[]> {
    if (!this.authKey) throw ZABBIX_API_MISSING_AUTHENTICATION

    try {
      const hosts = await this.client.post<ZabbixResponse<ZabbixHost[]>>('', {
        jsonrpc: '2.0',
        method: 'host.get',
        params: {
          output: ['hostid', 'host'],
          groupids: groupId,
          selectInterfaces: ['ip'],
        },
        id: 1,
        auth: this.authKey,
      })

      if (hosts.data.error || !hosts.data.result)
        throw ZABBIX_API_FETCHINGHOSTS_ERROR

      return hosts.data.result
    } catch (error) {
      throw ZABBIX_API_FETCHINGHOSTS_ERROR
    }
  }

  async getHostItems(hostId: string): Promise<ZabbixItem[]> {
    if (!this.authKey) throw ZABBIX_API_MISSING_AUTHENTICATION

    try {
      const response = await this.client.post<ZabbixResponse<ZabbixItem[]>>(
        '',
        {
          jsonrpc: '2.0',
          method: 'item.get',
          params: {
            output: 'extend',
            hostids: hostId,
            sortfield: 'name',
          },
          id: 1, // ID fixo para todas as requisições
          auth: this.authKey,
        }
      )

      if (response.data.error || !response.data.result) {
        throw ZABBIX_API_FETCHINGITEMS_ERROR
      }

      return response.data.result
    } catch (error) {
      throw ZABBIX_API_FETCHINGITEMS_ERROR
    }
  }

  async getItemHistory(
    itemId: string,
    limit: number = 100
  ): Promise<ZabbixItemHistory[]> {
    if (!this.authKey) throw ZABBIX_API_MISSING_AUTHENTICATION
    if (!itemId) throw ZABBIX_API_INVALID_PARAMETERS

    try {
      const response = await this.client.post<
        ZabbixResponse<ZabbixItemHistory[]>
      >('', {
        jsonrpc: '2.0',
        method: 'history.get',
        params: {
          output: 'extend',
          history: 3, // 0 - float, 3 - numeric unsigned
          itemids: itemId,
          sortfield: 'clock',
          sortorder: 'DESC',
          limit,
        },
        id: 1,
        auth: this.authKey,
      })

      if (response.data.error || !response.data.result) {
        throw ZABBIX_API_FETCHING_HISTORY_ERROR
      }

      return response.data.result
    } catch (error) {
      throw ZABBIX_API_FETCHING_HISTORY_ERROR
    }
  }
}

export default ZabbixApiClient
