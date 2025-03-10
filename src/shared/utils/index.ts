export function dateYearMonth(value: string | number | Date): string {
  let now = new Date(value).toISOString().split('-') as Array<string>
  return `${now[0]}-${now[1]}`
}
