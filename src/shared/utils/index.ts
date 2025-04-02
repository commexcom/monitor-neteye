import { ZabbixItemHistory } from '../types/zabbix-api/zabbix-response'

export function zabbixItemHistoryToHourly(
  zabbixHistory: ZabbixItemHistory[]
): ZabbixItemHistory[] {
  const hoursDone: number[] = []
  const nowMinutes = new Date().getMinutes()
  const history: ZabbixItemHistory[] = []

  zabbixHistory.forEach((item) => {
    const itemDate = new Date(parseInt(item.clock) * 1000)
    const itemHour = itemDate.getHours()
    const itemMinutes = itemDate.getMinutes()

    if (itemMinutes === nowMinutes && !hoursDone.includes(itemHour)) {
      hoursDone.push(itemHour)
      history.push(item)
    }
  })

  return history
}
